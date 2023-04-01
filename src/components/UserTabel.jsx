import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import {toast} from 'react-toastify'

const UserTabel = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchUser,setSearchUser]=useState('');
  const [loading,setLoading]=useState(true);
  const getApiData = () => {
    axios
      .get(`https://6422976577e7062b3e1d489f.mockapi.io/user`)
      .then((res) => {
        console.log(res.data);
        setUsersData(res.data);
        setLoading(false)

      });
  };

  const handleSearchInput=(e)=>{
   console.log(e.target.value)
   setSearchUser(e.target.value)
  }

  
  const handleDelete = async (id) => {
    await axios.delete(`https://6422976577e7062b3e1d489f.mockapi.io/user/${id}
   `);
   
   getApiData();
   toast.warn("User Deleted Successfully")
  };
  useEffect(() => {
    getApiData();
  }, []);

  if(loading){
    return <LoadingPage/>
  }

  const filteredData = usersData.filter((items)=>{
    return items.name.toLowerCase().includes(searchUser.toLowerCase())||items.address.toLowerCase().includes(searchUser.toLowerCase())
   
  });

  
  return (
    <>
  <div className="container text-center py-4 ">
     <input type="text" placeholder="Search....by name or address" className="w-75 py-3 px-4" onChange={handleSearchInput} value={searchUser} />
     </div>

     {
filteredData.length === 0 ? (
  <div className="container text-center py-4">
    <h3 className="text-white">No user found in table</h3>
  </div>
) : (
  <table className="table responsive">
  <thead>
    <tr className="bg-dark text-white">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {usersData.filter((items)=>{
      return items.name.toLowerCase().includes(searchUser)||items.address.toLowerCase().includes(searchUser)
    }).map((datas) => {
      return (
        <tr key={datas.id} className="text-white">
          <td>{datas.id}</td>
          <td>{datas.name}</td>
          <td>{datas.address}</td>
          <td>{datas.email}</td>
          <td>
            <Link className="btn btn-primary m-2" to={`/view/user/${datas.id}`}>
              <i className="fa-solid fa-eye"></i>
            </Link>
            <Link
              className="btn btn-primary m-2"
              to={`/edit/user/${datas.id}`}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>
            <Link
              className="btn btn-danger m-2"
              onClick={() => handleDelete(datas.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </Link>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>

)



     }
     
    </>
  );
};

export default UserTabel;
