import React, { useContext } from 'react'

import Card from '../../Card/Card'

import { Context } from '../../App/App'

const Leftside = () => {
  const { watchList } = useContext(Context)

  return (
    <section className="Main__left">
      <h1 className="Main__left__title">Smartwatch</h1>
      <p className="Main__left__text">element serie</p>
      <p className="Main__left__secondText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.{' '}
      </p>

      <div className="Main__card">
        {watchList.map(({ id, name, img }) => (
          <Card id={id} key={id} title={name} img={img} />
        ))}
      </div>
    </section>
  )
}

export default Leftside
