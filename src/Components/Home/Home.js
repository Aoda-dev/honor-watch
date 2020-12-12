import React, { Fragment, useEffect } from 'react'
import { gsap } from 'gsap'

import Header from '../Header/Header'
import Main from '../Main/Main'

import './Home.css'

const Home = () => {
  useEffect(() => {
    gsap.from('.Header', { opacity: 0, duration: 1, delay: 1 })
    gsap.from('.Main__left__title', { y: 50, opacity: 0, duration: 1, delay: 1 })
    gsap.from('.Main__left__text', { y: 10, opacity: 0, duration: 1, delay: 1.2 })
    gsap.from('.Main__left__secondText', { opacity: 0, duration: 1, delay: 1.2 })
    gsap.from('.Main__card', { x: '-1000%', duration: 2, delay: 0.4 })
    gsap.from('.Main__right__img', { opacity: 0, duration: 1, delay: 1.5 })
    gsap.from('.Main__right__arrow', { opacity: 0, duration: 1.5, delay: 1.7 })
  }, [])

  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  )
}

export default Home
