/*! Source: W3Schools; modified */

function openNav() {
    $(".link").fadeIn();
    $("#theSidenav").width("250px");
    $("#main").css("margin-left", "250px");
    $("#closeArrow").removeClass("fa-angle-right");
    $("#closeArrow").addClass("fa-angle-left");
}

function closeNav() {
    $(".link").fadeOut();
    $("#theSidenav").width("60px");
    $("#main").css("margin-left", "60px");
    $("#closeArrow").removeClass("fa-angle-left");
    $("#closeArrow").addClass("fa-angle-right");
}

function closeIfLowRes() {
    if ($(window).width() < 720) closeNav();
}

$(".closebtn").click(function() {
    $("#closeArrow").hasClass("fa-angle-left") ? (closeNav()) : (openNav());
});

