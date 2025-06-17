import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BlogsData from './BlogsData';


const Blogs = () => {
  const navigation = useNavigate();
  const [blogs,setBlogs] = useState(BlogsData);


  const truncateString = (str,num)=>{
    if(str.length > num){
      return str.slice(0,num)+"......."
    }
    else{
      return str
    }
  }
  return (
    <div>
      <button
       onClick={()=>{
        navigation("/")
       }}
      >Go To Home</button>

      
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog)=>{
          const {id,title,body}=blog;
          return <article key={id}>
            <h3>{title}</h3>
            <p>{truncateString(body,90)}</p>
            <Link to={`/blogs/${id}`} state={{id,title,body}}>Learn More</Link> {/* This is for useLocation() */}
            {/* <Link to={`/blogs/:id`}>Learn More</Link> */}   {/* This is for useParams() */}
          </article>
        })}
      </section>

    </div>
  )
}

export default Blogs;
