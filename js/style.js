/*global console, alert, prompt, $*/

$(document).ready(function () {
    
    "use strict";
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 10) {
            
            $(".navbar-fixed-top").animate({top: '0px'});
        } else {
            $(".navbar-fixed-top").animate({top: '25px'});
        }
    });
    
    var elemStyle = getComputedStyle(document.getElementById("third"));
    
    $(".icone").click(function () {
        
        if (elemStyle.display === "block") {
            $(".menu").animate({left: '0'});
            $("#first").addClass("animate1");
            $("#seconde").addClass("animate2");
            $("#third").css("display", "none");
        } else {
            $(".menu").animate({left: '100%'});
            $("#first").removeClass("animate1");
            $("#seconde").removeClass("animate2");
            $("#third").css("display", "block");
        }
    });
    
    $(".fa-times").click(function () {
        
        $(".menu").animate({left: '100%'});
    });
});