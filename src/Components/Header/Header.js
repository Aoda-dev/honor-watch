import React, { useContext } from 'react'
import { gsap } from 'gsap'

import BrandName from '../BrandName/BrandName'
import Logo from '../Logo/Logo'

import './Header.css'

import { Context } from '../App/App'

const Header = () => {
  const { toggleNav } = useContext(Context)

  const showAnimation = async () => {
    await toggleNav()
    const timeline = gsap.timeline()
    timeline.to('.Navbar', { x: '0%', duration: 0.5 })
  }

  return (
    <header className="Header">
      <Logo className="Header__logo" onClick={showAnimation.bind(this)} />
      <BrandName className="Header__brandName" />
      <nav className="Header__nav">
        <ul className="Header__list">
          <li className="Header__item">
            <a href="/" className="Header__link">
              Home
            </a>
          </li>
          <li className="Header__item">
            <a href="/" className="Header__link">
              Smartphone
            </a>
          </li>
          <li className="Header__item">
            <a href="/" className="Header__link">
              Store
            </a>
          </li>
          <li className="Header__item">
            <button className="Header__button">
              <a href="/" className="Header__button__link">
                Buy Now
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
