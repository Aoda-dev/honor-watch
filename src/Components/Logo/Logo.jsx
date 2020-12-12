import React from 'react'

const Logo = ({ className = '', onClick }) => {
  return (
    <svg
      onClick={onClick.bind(this)}
      className={className}
      width="44"
      height="29"
      viewBox="0 0 44 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3" y1="3" x2="41" y2="3" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line
        x1="3"
        y1="18"
        x2="26"
        y2="18"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="32"
        x2="26"
        y2="32"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Logo
