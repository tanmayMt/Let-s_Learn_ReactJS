import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BlogsData from './BlogsData';

const Blog = () => {
  const {title} = useParams();

//  useParams is a React Router hook that lets you access the dynamic parts of the URL (called route parameters).

// 🟢 It’s used when your route contains something like /user/:id or /product/:slug.

// You can then extract that id or slug inside the component using useParams.
  const [bodyData,setBodyData] = useState("");

  useEffect(()=>{
    const blogData = BlogsData.filter((blog)=>blog.title===title);
    setBodyData(blogData[0].body);
  },[])
  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData}</p>
    </div>
  )
}

export default Blog;
