import { gsap } from 'gsap'

export const hideAniamtion = (onClick) => {
  const timeline = gsap.timeline({ onComplete: onClick })
  timeline.to('.Navbar', { x: '-100%', duration: 0.5 })
}

export const borderMouseLeave = (className) => {
  document.querySelector(`.${className}`).classList.remove('added')
}

export const borderMouseMove = (className) => {
  document.querySelector(`.${className}`).classList.add('added')
}

export const brandAnim = (className) => {
  gsap.fromTo(className, { y: 100 }, { y: 0, duration: 1 })
}
