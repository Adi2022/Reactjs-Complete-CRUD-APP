import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
const ViewUser = () => {
  const [viewUser, setViewUser] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const getApiData = () => {
    axios
      .get(`https://6422976577e7062b3e1d489f.mockapi.io/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setViewUser(res.data);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="container py-4">
      <h1>View User</h1>
      <h3 className="text-secondary display-3">{viewUser.name}</h3>
      <h3 className="text-secondary">{viewUser.address}</h3>
      <h3 className="text-secondary">{viewUser.email}</h3>
    </div>
  );
};

export default ViewUser;
