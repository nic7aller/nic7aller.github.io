/*! Source: W3Schools; modified */

function openNav() {
    $(".nav-close-link").css("padding-left", "0px");
    $(".link").fadeIn();
    $(".navbar-brand").css("width", "auto");
    $("#theSidenav").width("250px");
    $("#main").css("margin-left", "250px");
    $("#closeArrow").removeClass("fa-angle-right");
    $("#closeArrow").addClass("fa-angle-left");
}

function closeNav() {
    $(".nav-close-link").css("padding-left", "-16px");
    $(".link").fadeOut();
    $(".navbar-brand").css("width", "0");
    $("#theSidenav").width("50px");
    $("#main").css("margin-left", "50px");
    $("#closeArrow").removeClass("fa-angle-left");
    $("#closeArrow").addClass("fa-angle-right");
}

$(".closebtn").click(function() {
    $("#closeArrow").hasClass("fa-angle-left") ? (closeNav()) : (openNav());
});