import React, { useState, createContext } from 'react'

import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

import dark from '../../assets/dark 1 (2).png'
import white from '../../assets/blanco 1.png'

import './App.css'

import { darkMode, whiteMode } from './AppAnimation'
export const Context = createContext()

const App = () => {
  const [showNav, setShowNav] = useState(false)
  const [mode, setMode] = useState(false)

  const toggleNav = () => {
    setShowNav((showNav) => !showNav)
  }

  const changeDarkMode = () => {
    setMode((mode) => !mode)
    mode ? whiteMode() : darkMode()
  }

  const watchList = [
    { id: 0, name: 'Dark', img: dark },
    { id: 1, name: 'White', img: white },
    { id: 2, name: 'Dark', img: dark },
  ]

  return (
    <div className="App">
      <Context.Provider value={{ watchList, toggleNav }}>
        <Home />
        {showNav ? <Navbar mode={mode} changeDarkMode={changeDarkMode} onClick={toggleNav} /> : null}
      </Context.Provider>
    </div>
  )
}

export default App
