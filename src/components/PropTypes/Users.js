import React, { useState } from 'react'
import User from './User';

const Users = () => {
  const [name,setName] = useState("Esha Roy");
  const [userId,setUserId] = useState("101");
  return (
    <>
    <User name={name} userId={userId}/>
    </>
  )
}

export default Users;
