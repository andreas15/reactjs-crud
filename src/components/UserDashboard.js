import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UserDashboard = () => {

    const [data, setData] = useState([{}])
    useEffect(() => {
        getUser()
    }, []);

    const [formData, setFormData] = useState([{}])
    useEffect(() => {
        getUser()
    }, []);

    const getUser = async () => {
        await axios.get('http://localhost:4000/posts').then(res => setData(res.data));
    }

    const handleDelete = async (id) => {
        await axios.delete('http://localhost:4000/posts/' + id).then(res => alert('Hapus data berhasil'))
        getUser()
    }

    const handleUpdate = async (e) => {
        let response = await axios.put('http://localhost:4000/posts/' + formData.id, formData);

        if (response) {
            alert("Data berhasil diupdate");
        } else {
            alert("Data yang dimasukkan salah");
        }

        setFormData({
            name: '',
            mobile: '',
            email: '',
            password: '',
        })
        getUser()
    };


    return (
        <div>
            <h1>User Dashboard</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nama Lengkap</th>
                        <th scope="col">No Telepon</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((user) => (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                    <button
                                        className='btn btn-info'
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => setFormData({
                                            name: user.name,
                                            email: user.email,
                                            mobile: user.mobile,
                                            password: user.password,
                                            id: user.id
                                        })}
                                    >Edit</button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDelete(user.id)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5
                                class="modal-title"
                                id="exampleModalLabel">Update User</h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nama Lengkap</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Nama Lengkap Anda"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="number">No Telepon</label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="No Telepon Anda"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Alamat Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Alamat Email Anda"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Kata Sandi</label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Kata Sandi Anda"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <div
                            class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                            <button type="button" class="btn btn-primary" onClick={handleUpdate}>Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard