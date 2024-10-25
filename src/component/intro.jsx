import React from 'react'

import './intro.css'

const intro = ({myName}) => {

  function openInNewTab(i) {
    let url = ['https://www.instagram.com', 'https://www.linkedin.com', 'https://www.github.com']
    window.open(url[i])
  }

  return (
    <div className='mainCont' id='home'>

      <div className="up">
        <div className="details">
          <span className='start'>
            Hello, my name is
          </span>
          <span className='myname'>
            {myName}
          </span>

          <span className='after'>
          I'm a web developer specializing in React.js
          and UI/UX design
          </span>
        </div>

        <div className="imag">
          <img src="/tod.jpg" alt="" />
        </div>
      </div>

      <div className="introAction">
        <div className="myProj" onClick={() =>{
              document.getElementById('projects').scrollIntoView()
            }}>My Projects</div>
        <div className="contactMe" onClick={() =>{
              document.getElementById('contact').scrollIntoView()
            }}>Contact Me</div>
      </div>

      <div className="socials" id='about'>
        <i class="fa-brands fa-instagram" onClick={() =>openInNewTab(0)}></i>
        <i class="fa-brands fa-linkedin-in" onClick={()=>openInNewTab(1)}></i>
        <i class="fa-brands fa-github" onClick={()=>openInNewTab(2)}></i>
      </div>

    </div>
  )
}

export default intro