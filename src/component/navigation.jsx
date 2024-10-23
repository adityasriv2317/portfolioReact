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
            <li onClick={() =>{
              document.getElementById('home').scrollIntoView()
            }}><a href="#home">Home</a></li>
            <li onClick={() =>{
              document.getElementById('about').scrollIntoView()
            }}><a href="#about">About</a></li>
            <li onClick={() =>{
              document.getElementById('projects').scrollIntoView()
            }}><a href="#projects">Projects</a></li>
            <li onClick={() =>{
              document.getElementById('skills').scrollIntoView()
            }}><a href="#skills">Skills</a></li>
            <li onClick={() =>{
              document.getElementById('sontact').scrollIntoView()
            }}><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        <div className="menu">&#9776;</div>
    </div>
  )
}

export default header