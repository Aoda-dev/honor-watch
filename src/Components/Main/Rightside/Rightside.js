import React from 'react'

import Arrow from '../../Arrow/Arrow'

import watch5 from '../../../assets/smartwaatch 5.png'

const Rightside = ({ switchWatch }) => {
  return (
    <section className="Main__right">
      <img className="Main__right__img" src={watch5} alt="White" />
      <Arrow className="Main__right__arrow" onClick={switchWatch.bind(this)} />
    </section>
  )
}

export default Rightside
