import React, { useState } from "react";
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
const AddNewUser = () => {
    const navigate=useNavigate();
  const [addUser, setAddUser] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddUser({ ...addUser, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    toast.success('User Added Successfully')
    const myData=  await axios.post('https://6422976577e7062b3e1d489f.mockapi.io/user',addUser);
    setAddUser(myData)
    navigate('/')
   
  };
  return (
    <div className="container py-4">
      <div className="w-75 mx-auto shadow p-5 mb-4">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={addUser.name}
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={addUser.address}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={addUser.email}
              onChange={handleInput}
            />
          </div>

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
