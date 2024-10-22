import React from 'react'

import Nav from './component/navigation'
import Intro from './component/intro'
import img from "./assets/tod.jpg"

let name = 'Aditya Srivastava'

const App = () => {
  return (
    <div>
      <Nav myName={name}/>
      <Intro myName={name} myImage={img}/>
    </div>
  )
}

export default App