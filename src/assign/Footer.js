import React from 'react'
import "./assign.css";

function Footer() {
  return (
    <footer>
        <div className="foots">
            <ul>
              <p>category</p>
              <li><a href="">web builder</a></li>
              <li><a href="">hoisting</a></li>
              <li><a href="">data center</a></li>
              <li><a href="">robotic automation</a></li>
            </ul>
        </div>
        <div className="foots">
            <ul>
              <p>contact</p>
              <li><a href="">contact</a></li>
              <li><a href="">privacy policy</a></li>
              <li><a href="">terms of service</a></li>
              <li><a href="">categogies</a></li>
            </ul>
        </div>
        <div className="foots">
            <ul>
              <p>India <span>⋁</span></p>
            </ul>
        </div>
    </footer>
  )
}

export default Footer