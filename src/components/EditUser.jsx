import React, { useEffect, useState } from "react";
import axios from 'axios';
import  {useNavigate,useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

const EditUser = () => {
    const navigate=useNavigate();
    const {id}=useParams()
    console.log(id,"**********************")
  const [editUser, setEditUser] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };
 
  const handleSubmit =async (e) => {
    e.preventDefault();
 
    const myData=  await axios.put(`https://6422976577e7062b3e1d489f.mockapi.io/user/${id}`,editUser);
    navigate('/')
    toast.info("User Updated Successfully")
   
  };
const loadUser=async()=>{
 const result=await axios.get (`https://6422976577e7062b3e1d489f.mockapi.io/user/${id}`)
 
 setEditUser(result.data)
}

useEffect(()=>{
    loadUser()
    },[])


  return (
    <div className="container py-4">
    <div className="w-75 mx-auto shadow p-5 mb-4">
      <h2 className="text-center mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={editUser.name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={editUser.address}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={editUser.email}
            onChange={handleInput}
          />
        </div>

        <button className="btn btn-warning btn-block">Update User</button>
      </form>
    </div>
  </div>
  )
  }

export default EditUser;