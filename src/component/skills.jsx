import React from 'react'
import './skills.css'

const skills = () => {
  return (
    <div className='skills'>
        
        <hr />
        <div className="moto">My Skills</div>

        <div className="mySkills">
          <span>
            <img src="../src/assets/skills/html.png" alt="" />
            HTML
          </span>
          <span>
            <img src="../src/assets/skills/css.png" alt="" />
            CSS
          </span>
          <span>
            <img src="../src/assets/skills/js.png" alt="" />
            JavaScript
          </span>
          <span>
            <img src="../src/assets/skills/react.png" alt="" />
            ReactJS
          </span>
        </div>

    </div>
  )
}

export default skills