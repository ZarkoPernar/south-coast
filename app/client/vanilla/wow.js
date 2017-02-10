import AOS from 'aos'

const HEADER_EL = document.getElementById('main-header') 

export function initWow() {

    addScroll()
    // initCollage()


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


function addScroll() {
    let annouce = [...document.querySelectorAll('.annouce')]
    let wh = document.documentElement.clientHeight

    annouce.forEach((el) => {
        el.style.transitionDelay = 'none'
        el.style.transition = 'none'
    })

    document.addEventListener('scroll', onScroll, {
        passive: true
    })

    function onScroll(e) {
        if (document.documentElement.scrollTop >= wh) {
            HEADER_EL.classList.add('header--scrolled')
        } else {
            HEADER_EL.classList.remove('header--scrolled')
        }

        let nextPos = document.documentElement.scrollTop / 2
        annouce.forEach((el) => {
            requestAnimationFrame(() => {el.style.transform = `translate3d(0, -${nextPos}px, 0)`})
        })
    }
}

// function initCollage() {
//     let container = document.querySelector('.collage')
//     let collage = [...document.querySelectorAll('.collage__item')]
//     let containerWidth

//     window.addEventListener('resize', resize)

//     resize()

//     function resize() {
//         containerWidth = container.offsetWidth
//         collage.forEach(resizeItem)
//     }

//     function resizeItem(el, i) {

//     }
// }