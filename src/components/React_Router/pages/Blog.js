import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BlogsData from './BlogsData';

const Blog = () => {
  const {id} = useParams();

//  useParams is a React Router hook that lets you access the dynamic parts of the URL (called route parameters).
// 🟢 It’s used when your route contains something like /user/:id or /product/:slug.
// You can then extract that id or slug inside the component using useParams.
  const [bodyData,setBodyData] = useState("");
  const [titleData,setTitleData] = useState("");
  useEffect(()=>{
    //const blogData = BlogsData.filter((blog)=>blog.id===id);
    const blogData = BlogsData.find((blog) => blog.id === id); // ✅ use .find instead of .filter
    if(blogData){
      setBodyData(blogData.body);
      setTitleData(blogData.title);
    }
    else{
      setBodyData('Blog not found.');
      setTitleData('404');
    }

  },[id])
  return (
    <div>
      <h1>{titleData}</h1>
      <p>{bodyData}</p>
    </div>
  )
}

export default Blog;
