import React from 'react'
import { Link } from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
    </nav>
  )
}

export default Navbar;
