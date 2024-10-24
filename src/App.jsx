import React from 'react'
import './App.css'

import Nav from './component/navigation'
import Intro from './component/intro'
import AboutMe from './component/aboutMe'
import Projects from './component/projects'
import Skills from './component/skills'
import Contact from './component/contact'

// import img from "./assets/tod.jpg"

let name = 'Aditya Srivastava'

const App = () => {
  return (
    <div className='App'>
      <Nav myName={name}/>
      <Intro myName={name} />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />

      <a id='goup' href='#'><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  )
}

export default App