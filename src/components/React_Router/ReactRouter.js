import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";



import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ReactRouter = () => {
  return (

// BrowserRouter – wraps your app to enable routing
// Routes – holds all routes
// Route – defines a path and its corresponding component
   
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
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
