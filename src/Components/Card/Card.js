import React from 'react'

import './Card.css'

const Card = ({ title, img, id }) => {
  return (
    <div className="Card" id={'Card__' + id}>
      <h2 className="Card__title">{title}</h2>
      <small className="Card__text">Element</small>
      <img className="Card__img" src={img} alt="dark" />
    </div>
  )
}

export default Card
