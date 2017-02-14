import AOS from 'aos'

const HEADER_EL = document.getElementById('main-header') 

export default function scrollEffects() {
    let button = document.getElementById('main-nav-toggle')        
    let nav = document.getElementById('nav-sm')  

    let navActive = false   
    
    button.addEventListener('click', toggleNav)
    HEADER_EL.addEventListener('click', function(e) {
        e.stopPropagation()
    })
    document.body.addEventListener('click', closeNav)
    
    

    function closeNav() {
        navActive = false
        button.classList.remove('hamburger--active')
        nav.classList.remove('main-nav--active')            
    }

    function toggleNav() {
        navActive = !navActive
        
        if (navActive) {
            button.classList.add('hamburger--active')
            nav.classList.add('main-nav--active')
        } else {
            button.classList.remove('hamburger--active')
            nav.classList.remove('main-nav--active')
        }
    }

    AOS.init()

}