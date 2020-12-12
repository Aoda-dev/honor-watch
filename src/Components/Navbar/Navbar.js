import React, { useEffect } from 'react'

import BrandName from '../BrandName/BrandName'
import { hideAniamtion, borderMouseLeave, borderMouseMove, brandAnim } from './NavbarAnimations'

import './Navbar.css'

const Navbar = ({ onClick }) => {
  useEffect(() => {
    brandAnim('.Navbar__brandName')
  }, [])

  return (
    <div className="Navbar">
      <div className="Navbar__close" onClick={() => hideAniamtion(onClick)}>
        <svg
          className="Navbar__close__icon"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1.93934" y1="27.9393" x2="27.9393" y2="1.93934" stroke="white" strokeWidth="3" />
          <line x1="1.93934" y1="27.9393" x2="27.9393" y2="1.93934" stroke="white" strokeWidth="3" />
          <line x1="1.93934" y1="27.9393" x2="27.9393" y2="1.93934" stroke="white" strokeWidth="3" />
          <line x1="1.06066" y1="1.93934" x2="27.0607" y2="27.9393" stroke="white" strokeWidth="3" />
          <line x1="1.06066" y1="1.93934" x2="27.0607" y2="27.9393" stroke="white" strokeWidth="3" />
          <line x1="1.06066" y1="1.93934" x2="27.0607" y2="27.9393" stroke="white" strokeWidth="3" />
        </svg>
      </div>

      <p className="Navbar__title">
        <a
          className="Navbar__link Navbar__home"
          href="/"
          onMouseLeave={(e) => {
            borderMouseLeave(e.target.classList[1])
          }}
          onMouseMove={(e) => borderMouseMove(e.target.classList[1])}
        >
          Home
        </a>
      </p>
      <p className="Navbar__title">
        <a
          className="Navbar__link Navbar__smartPhone"
          href="/"
          onMouseLeave={(e) => {
            borderMouseLeave(e.target.classList[1])
          }}
          onMouseMove={(e) => borderMouseMove(e.target.classList[1])}
        >
          Smartphone
        </a>
      </p>
      <p className="Navbar__title">
        <a
          className="Navbar__link Navbar__store"
          href="/"
          onMouseLeave={(e) => {
            borderMouseLeave(e.target.classList[1])
          }}
          onMouseMove={(e) => borderMouseMove(e.target.classList[1])}
        >
          Store
        </a>
      </p>

      <BrandName className="Navbar__brandName" />
    </div>
  )
}

export default Navbar
