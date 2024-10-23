import React from 'react'

import Nav from './component/navigation'
import Intro from './component/intro'
import AboutMe from './component/aboutMe'
import Projects from './component/projects'

// import img from "./assets/tod.jpg"

let name = 'Aditya Srivastava'

const App = () => {
  return (
    <div>
      <Nav myName={name}/>
      <Intro myName={name} />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App