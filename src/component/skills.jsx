import React from 'react'
import './skills.css'

const skills = () => {
  return (
    <div className='skills'>
        
        <hr />
        <div className="moto">My Skills</div>

        <div className="mySkills">
          <span>
            <img src="/html.png" alt="" />
            HTML
          </span>
          <span>
            <img src="/css.png" alt="" />
            CSS
          </span>
          <span>
            <img src="/js.png" alt="" />
            JavaScript
          </span>
          <span>
            <img src="/react.png" alt="" />
            ReactJS
          </span>
        </div>

    </div>
  )
}

export default skills