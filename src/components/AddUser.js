import axios from 'axios';
import React, { useState } from 'react'
import styles from '../components/AddUser.css'
const AddUser = () => {
    const [formData, setFormData, setData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
    });

    const getUser = async () => {
        await axios.get('http://localhost:4000/posts').then(res => setData(res.data));
    }

    const handleFormSubmit = async (e) => {
        let response = await axios.post('http://localhost:4000/posts', formData);

        if (response) {
            alert("Data telah berhasil ditambahkan");
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
            <div>
                <div>
                    <h1>Add User Form</h1>
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
                <div>
                    <div class='mb-3'>
                        <button className='btn btn-success'
                            onClick={handleFormSubmit}>Add User</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser