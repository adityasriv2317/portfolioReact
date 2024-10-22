import React from 'react'

import './intro.css'

const intro = ({myName}, {myImage}) => {
  return (
    <div className='mainCont'>

      <div className="up">
        <div className="details">
          <span className='start'>
            Hello, my name is
          </span>
          <span className='myname'>
            {myName}
          </span>

          <span className='after'>
          I'm a web developer specializing in React.js and UI design
          </span>
        </div>

        <div className="imag">
          <img src="../src/assets/tod.jpg" alt="" />
        </div>
      </div>

      <div className="introAction">
        <div className="myProj">My Projects</div>
        <div className="contactMe">Contact Me</div>
      </div>

    </div>
  )
}

export default intro