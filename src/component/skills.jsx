import React from 'react'
import './skills.css'

const skills = () => {
  return (
    <div className='skills'>
        
        <hr />
        <div className="moto">My Skills</div>

        <div className="mySkills">
          <span>
            <img src="../src/images/skills/html.png" alt="" />
            HTML
          </span>
          <span>
            <img src="../src/images/skills/css.png" alt="" />
            CSS
          </span>
          <span>
            <img src="../src/images/skills/js.png" alt="" />
            JavaScript
          </span>
          <span>
            <img src="../src/images/skills/react.png" alt="" />
            ReactJS
          </span>
        </div>

    </div>
  )
}

export default skills