import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserDashboard = () => {

    const [data, setData] = useState([{}])
    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        await axios.get('http://localhost:4000/posts').then((res) => setData(res.data))
    }

    const handleDelete = async (id) => {
        await axios.delete('http://localhost:4000/posts/' + id).then(res => alert('Hapus data berhasil'))
        getUser()
    }

    return (
        <div>
            <h1>User Dashboard</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nama</th>
                        <th scope="col">No Telepon</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data &&
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
                                        className='btn btn-info'>Edit</button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDelete(user.id)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserDashboard