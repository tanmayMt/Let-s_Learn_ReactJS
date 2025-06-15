import React from 'react'
import { useNavigate } from 'react-router-dom';


const Blogs = () => {
  const navigation = useNavigate();

  return (
    <div>
      <h1>This is Blogs Page</h1>




      
      <button
       onClick={()=>{
        navigation("/")
       }}
      >Go To Home</button>
    </div>
  )
}

export default Blogs;
