import React from 'react';
import UserData from './UsersData';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <>
      <h1><b>All Users Users</b></h1>
      {UserData.map((user)=>{
        const {id,name,address} = user;
        return <Link to={`/users/${id}`}><article key={id}>
            <h3>{name}</h3>
            <h5>{address}</h5>
        </article></Link>
      })}
    </>
  )
}

export default Users
