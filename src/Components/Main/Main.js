import React from 'react'
import { gsap } from 'gsap'

import Leftside from './Leftside/Leftside'
import Rightside from './Rightside/Rightside'

import './Main.css'

const Main = () => {
  const switchWatch = () => {
    //there will be aniamtion here
  }

  return (
    <main className="Main">
      <Leftside />
      <Rightside switchWatch={switchWatch} />
    </main>
  )
}

export default Main
