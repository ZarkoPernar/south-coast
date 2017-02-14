const HEADER_EL = document.getElementById('main-header') 

export default function addScroll() {
    let annouce = [...document.querySelectorAll('.annouce')]
    let split = [...document.querySelectorAll('.start__split')]
    let wh = document.documentElement.clientHeight *.8
    let backup = fn => fn()
    let animate = window.requestAnimationFrame || backup

    annouce.forEach((el) => {
        el.style.transitionDelay = 'none'
        el.style.transition = 'none'
    })

    split.forEach((el) => {
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

        let nextPosAnnouce = document.documentElement.scrollTop / 5
        let nextPosSplit = document.documentElement.scrollTop / 1.5

        annouce.forEach((el) => {
            animate(() => {el.style.transform = `translate3d(0, -${nextPosAnnouce}px, 0)`})
        })
        
        split.forEach((el) => {
            animate(() => {el.style.transform = `translate3d(0, -${nextPosSplit}px, 0)`})
        })
    }
}