import React from 'react'
import "./assign.css";

function Navbar() {
  return (
    <nav>
        <div>
          <input type="search" />
        </div>
        <div>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </div>
    </nav>
  )
}

export default Navbar