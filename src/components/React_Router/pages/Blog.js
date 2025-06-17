import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import BlogsData from './BlogsData';

const Blog = () => {
  const {id} = useParams();
  const location = useLocation();
//   useLocation is a React Router hook that lets you access the current URL/location object in your app.
// It gives you full information about:
// •	pathname (current route)
// •	search (query parameters)
// •	hash (anchor link)
// •	state (optional passed data)

  console.log(location);

//  useParams is a React Router hook that lets you access the dynamic parts of the URL (called route parameters).
// 🟢 It’s used when your route contains something like /user/:id or /product/:slug.
// You can then extract that id or slug inside the component using useParams.
  // const [bodyData,setBodyData] = useState("");
  // const [titleData,setTitleData] = useState("");
  // useEffect(()=>{
  //   //const blogData = BlogsData.filter((blog)=>blog.id===id);
  //   const blogData = BlogsData.find((blog) => blog.id === id); // ✅ use .find instead of .filter
  //   if(blogData){
  //     setBodyData(blogData.body);
  //     setTitleData(blogData.title);
  //   }
  //   else{
  //     setBodyData('Blog not found.');
  //   }

  // },[id])
  return (
    <div>
      <h1>{location.state.title}</h1>
      <p>{location.state.body}</p>
    </div>
  )
}

export default Blog;
