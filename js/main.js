$(document).ready(function(){
    
    $('.hamburger').click(function(){
        $(".nav-menu").slideToggle();
        $('.hamburger-close').fadeIn();
        $('.hamburger').fadeOut();
    });

    $('.hamburger-close').click(function(){
        $(".nav-menu").slideToggle();
        $('.hamburger-close').fadeOut();
        $('.hamburger').fadeIn();
    });

    $('.mobile-button').click(function(){
        $(".nav-menu").slideToggle();
        $('.hamburger-close').fadeOut();
        $('.hamburger').fadeIn();
    });
    
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var height = document.body.offsetHeight;
    var width = document.body.offsetWidth;
    var value = 0.7*height;
    if(width >= 1000){
        if (document.body.scrollTop > value || document.documentElement.scrollTop > value) {
            document.getElementById("nav-top-menu").style.top = "0";
        } else {
            document.getElementById("nav-top-menu").style.top = "-60px";
        }
    }
}