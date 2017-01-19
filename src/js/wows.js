(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', wows);

    function wows() {
        let button = document.getElementById('main-nav-toggle')        
        let nav = document.getElementById('main-nav')        
        let header = document.getElementById('main-header')        
        let navActive = false   

        button.addEventListener('click', toggleNav)
        header.addEventListener('click', function(e) {
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

        let fuck = document.querySelectorAll('section');
        
        let lel = new WOW().init();
    }
}());
