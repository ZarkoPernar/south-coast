import smoothScroll from 'smoothscroll-polyfill'

import { byId } from './utils'

smoothScroll.polyfill()



export function mobileNav() {
    const HEADER_EL = byId('main-header') 
    let navSm = byId('nav-sm')

    let button = byId('main-nav-toggle')        
      

    let navActive = false   
    
    button.addEventListener('click', toggleNav)

    HEADER_EL.addEventListener('click', function(e) {
        e.stopPropagation()
    })
    
    document.body.addEventListener('click', closeNav)
    
    

    function closeNav() {
        navActive = false
        button.classList.remove('hamburger--active')
        navSm.classList.remove('main-nav--active')            
    }

    function toggleNav() {
        navActive = !navActive
        
        if (navActive) {
            button.classList.add('hamburger--active')
            navSm.classList.add('main-nav--active')
        } else {
            button.classList.remove('hamburger--active')
            navSm.classList.remove('main-nav--active')
        }
    }    

}

export function scrollEffects() {
    const allNav = [...document.querySelectorAll('a[href^="#"]')]
    const wh = document.documentElement.clientHeight

    allNav.forEach(linkEl => {
        let targetName = linkEl.getAttribute('href').substring(1)
        let target = byId(targetName)
        
        if (!target)  return

        switch (targetName) {
            case 'topmost': 
                scrollLinkOnClick(linkEl, target, 0)
                break
            case 'main-services':
                scrollLinkOnClick(linkEl, target, wh)
                break
            default:
                scrollLinkOnClick(linkEl, target, wh + target.offsetTop)
        }
        
    })
}


export function scrollLinkOnClick(linkEl, target, top) {
    if (target) {
        linkEl.addEventListener('click', function(event) {
            event.preventDefault()

            window.scroll({ top, left: 0, behavior: 'smooth' })
        })
    }
    
}
