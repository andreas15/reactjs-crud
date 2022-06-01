import axios from 'axios';
import React, { useState } from 'react'

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
    });

    const handleFormSubmit = async(e) => {
        let response = await axios.post('http://localhost:4000/posts', formData)

        if (response){
            alert('Data berhasil di masukkan')
        } else {
            alert('Data yang dimasukkan salah')
        }
        setFormData({
            name: '',
            mobile: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <h1>Add User Form</h1>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nama" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}>
                    </input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">No Telepon</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="No Telepon" value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}>
                    </input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}>
                    </input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}>
                    </input>
                </div>

                <div class="mb-3">
                    <button className='btn btn-success'
                        onClick={handleFormSubmit}>Add User Data</button>
                </div>
            </div>
        </div>
    )
}


export default AddUser