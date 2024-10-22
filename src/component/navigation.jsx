import React from 'react'

import "./navigation.css"

const header = ({myName}) => {
  return (
    <div className='header'>

        <div className="logo">
          <span className="bracket">&lt;</span>
          <span className='mName'>{myName}</span>
          <span className="bracket">&gt;</span>
        </div>

        <nav className='navlinks'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>

        <div className="menu">&#9776;</div>
    </div>
  )
}

export default header