/*! Based on code from W3Schools */

function openNav() {
    $(".fades").fadeIn();
    $(".nav-name").css("color", "#fff");
    $(".nav-name").height("25px");
    $(".nav-logo").width("167px");
    $("#theSidenav").width("250px");
    $("#main").css("margin-left", "250px");
    $("#closeArrow").removeClass("fa-angle-right");
    $("#closeArrow").addClass("fa-angle-left");
}

function closeNav() {
    $(".fades").fadeOut();
    $(".nav-name").css("color", "#000");
    $(".nav-name").height("0px");
    $(".nav-logo").width("20px");
    $("#theSidenav").width("65px");
    $("#main").css("margin-left", "65px");
    $("#closeArrow").removeClass("fa-angle-left");
    $("#closeArrow").addClass("fa-angle-right");
}

function closeIfLowRes() {
    if ($(window).width() < 720) closeNav();
}

$(".closebtn").click(function() {
    $("#closeArrow").hasClass("fa-angle-left") ? (closeNav()) : (openNav());
});

