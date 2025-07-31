import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav_container'>
       <nav className='nav'>
            <Link to="/">Home</Link>

            <Link to="/cart">Save-Products</Link>
       </nav>

    </div>
  )
}
