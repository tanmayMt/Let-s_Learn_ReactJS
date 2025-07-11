import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Users from './pages/Users';
import User from './pages/User';

const ReactRouter = () => {
  return (

// BrowserRouter – wraps your app to enable routing
// Routes – holds all routes
// Route – defines a path and its corresponding component
   
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        {/* <Route path='/blogs/:title' element={<Blog/>}/> */}
        <Route path='/blogs/:id' element={<Blog/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<User/>}/>
        <Route path='*' element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default ReactRouter;

// Routing enables SPA (Single Page Application)

// Uses react-router-dom

// No full page reload

// Routes are mapped to components

// <Link> used instead of <a>

// Works with useNavigate, useParams for navigation and dynamic routing
