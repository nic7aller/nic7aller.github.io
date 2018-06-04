/*! Based on code from W3Schools, modified */

$(function () {
    $.get('templates/sidebar.hbs', function (data) {
        var template = Handlebars.compile(data);
        $("#theSidenav").html(template);
        closeArrowToOpenArrowIfLowRes();
    }, 'html');
});

function openNav() {
    $(".fades").fadeIn();
    $(".nav-name").css("color", "#fff");
    $(".nav-name").height("25px");
    $(".nav-logo").width("167px");
    $("#theSidenav").width("240px");
    if ($(window).width() > 719) $("#main").css("margin-left", "240px");
    $("#closeArrow").removeClass("fa-angle-right");
    $("#closeArrow").addClass("fa-angle-left");
}

function closeNav() {
    $(".fades").fadeOut();
    $(".nav-name").css("color", "#000");
    $(".nav-name").height("0px");
    $(".nav-logo").width("20px");
    if ($(window).width() < 720) {
        $("#theSidenav").width("22px");
        $("#main").css("margin-left", "22px");
    } else {
        $("#theSidenav").width("65px");
        $("#main").css("margin-left", "65px");
    }
    $("#closeArrow").removeClass("fa-angle-left");
    $("#closeArrow").addClass("fa-angle-right");
}

function closeArrowToOpenArrowIfLowRes() {
    if ($(window).width() < 720) {
        $(".fades").fadeOut();
        $("#closeArrow").removeClass("fa-angle-left");
        $("#closeArrow").addClass("fa-angle-right");
    }
}

$(window).resize(function() {
    if ($("#theSidenav").width() < 70){
        if ($(window).width() < 720) {
            if ($("#closeArrow").hasClass("fa-angle-left")){
                 closeNav();
            } else {
                $("#theSidenav").width("22px");
                $("#main").css("margin-left", "22px");
            }
        } else {
            if ($("#closeArrow").hasClass("fa-angle-left")){
                $(".fades").fadeIn();
                $("#closeArrow").removeClass("fa-angle-right");
                $("#closeArrow").addClass("fa-angle-left");
            } else {
                openNav();
            }
        }
    } else {
        if ($(window).width() < 720) {
            if ($("#closeArrow").hasClass("fa-angle-left")){
                closeNav();
            } 
        } else {
            if ($("#closeArrow").hasClass("fa-angle-left")){
                $("#main").css("margin-left", "240px");
            }
        }
    }
});

$("#theSidenav").on("click", ".closebtn", function() {
    $("#closeArrow").hasClass("fa-angle-left") ? (closeNav()) : (openNav());
});

