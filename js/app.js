$(document).ready(function () {
    // slick slider :- https://kenwheeler.github.io/slick/
    $('.slider').slick({
        arrows:false, /*we dont want arrows of previous and next*/
        dots:true, /*we want dots */
        appendDots: '.slider-dots' ,/*for custom dots */
        dotsClass:'dots',
        autoplay: true,
        autoplaySpeed: 3000,

    })

    // navbar coding 
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav')
    let MobilLinks = document.querySelectorAll(".mobile-nav li a")
    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');
    });

    function scrollTosection(){
        mobileNav.classList.remove('open');
    }

    times.addEventListener('click',scrollTosection);
    MobilLinks.forEach((Link) => {
        Link.addEventListener('click',scrollTosection)
    });

    // for sticky navbar
    window.addEventListener('scroll',function(){
        var header=document.querySelector('header nav');
        var smallNav=document.querySelector('.hamberger-wrapper')
        header.classList.toggle('nav-scrolled',window.scrollY>0);
        smallNav.classList.toggle('nav-scrolled',window.scrollY>0);
    })

});