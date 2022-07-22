const htmlVar = document.querySelector("html");

$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('#up').on('click', function(){
        htmlVar.style.scrollBehavior = "smooth";
        window.scrollTo(0,0);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });

    
});