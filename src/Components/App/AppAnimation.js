import { gsap } from 'gsap'

const seconds = 0.6

export const darkMode = () => {
  gsap.to('body', { backgroundColor: '#08162B', duration: seconds })
  gsap.to('.Header__link', { color: '#fff', duration: seconds })
  gsap.to('.Header__logo line', { stroke: '#fff', duration: seconds })
  gsap.to('.Header__brandName path', { fill: '#fff', duration: seconds })
  gsap.to('.Main__left__title', { color: '#fff', duration: seconds })
  gsap.to('.Card', { backgroundColor: '#2B3544', duration: seconds })
  gsap.to('.Main__left__secondText', { color: '#D8D8D8', duration: seconds })
  gsap.to('.Card__title', { color: '#fff', duration: seconds })
  gsap.to('.Main__right__arrow line', { stroke: '#fff', duration: seconds })
}

export const whiteMode = () => {
  gsap.to('body', { backgroundColor: '#fff', duration: seconds })
  gsap.to('.Header__link', { color: '#000', duration: seconds })
  gsap.to('.Header__logo line', { stroke: '#000', duration: seconds })
  gsap.to('.Header__brandName path', { fill: '#000', duration: seconds })
  gsap.to('.Main__left__title', { color: '#000', duration: seconds })
  gsap.to('.Card', { backgroundColor: '#fff', duration: seconds })
  gsap.to('.Main__left__secondText', { color: '#868686', duration: seconds })
  gsap.to('.Card__title', { color: '#000', duration: seconds })
  gsap.to('.Main__right__arrow line', { stroke: '#000', duration: seconds })
}
