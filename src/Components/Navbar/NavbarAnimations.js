import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/all'

gsap.registerPlugin(CSSRulePlugin)

export const hideAniamtion = (onClick) => {
  const timeline = gsap.timeline({ onComplete: onClick })
  timeline.to('.Navbar', { x: '-100%', duration: 0.5 })
}

export const borderMouseLeave = (className) => {
  let rule = CSSRulePlugin.getRule(`.${className}::after`)
  gsap.to(rule, { duration: 0.35, cssRule: { width: '0%', background: 'white' } })
}

export const borderMouseMove = (className) => {
  let rule = CSSRulePlugin.getRule(`.${className}::after`)
  gsap.to(rule, { duration: 0.35, cssRule: { width: '80%', background: 'white' } })
}

export const brandAnim = (className) => {
  gsap.fromTo(className, { y: 100 }, { y: 0, duration: 1 })
}
