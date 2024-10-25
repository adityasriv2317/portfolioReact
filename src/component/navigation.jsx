import React from 'react'

import "./navigation.css"

const header = ({myName}) => {

  let is = 0
  let toggleMenu = () => {
    let items = document.querySelector('.menuBar')

    if(is == 0){
      items.classList.add('active')
      is = 1
    }
    else{
      items.classList.remove('active')
      is = 0
    }
  }

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
              document.getElementById('contact').scrollIntoView()
            }}><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        <div className="menu" onClick={toggleMenu}>&#9776;</div>
        <div className="menuBar">
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
        </div>
    </div>
  )
}

export default header