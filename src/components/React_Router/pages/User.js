import React, { useEffect, useState } from 'react';
import UserData from './UsersData';
import {useNavigate, useParams } from 'react-router-dom';

const User = () => {
    const {id} = useParams();
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const userData = UserData.find((user)=>user.id === id);
        if (userData) {
            setName(userData.name);
            setAddress(userData.address);
        }
        else{
            alert("User Not Found!!!");
            navigate("/users");
        }
    },[id])
  return (
    <div>
      <h2>{name}</h2>
      <h5>{address}</h5>
    </div>
  )
}

export default User
