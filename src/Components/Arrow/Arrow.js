import React from 'react'

const Arrow = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick.bind(this)}
      width="24"
      height="39"
      viewBox="0 0 24 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3.53553"
        y1="3"
        x2="19.2188"
        y2="18.6832"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="2.5"
        y1="-2.5"
        x2="24.6794"
        y2="-2.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 23.2188 19)"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Arrow
