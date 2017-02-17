
import AOS from 'aos'

import { scrollEffects, mobileNav } from './nav'
import addScroll from './addScroll'
import contactForm from './contactForm'
// import listing from './listing'

export default function init() {
    AOS.init()
    
    scrollEffects()
    mobileNav()
    addScroll()
    // listing()
    contactForm()
}



