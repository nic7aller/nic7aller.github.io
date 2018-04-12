$(document).on("click",".image-button-right", function (event) {
    event.preventDefault();
    var div_area = $(this);
    var id = div_area.attr('id');
    closeOverlay();
    displayCorrectOverlay(id);
    $("#overlay").addClass("out");
 });

 $(document).on("click",".image-button-left", function (event) {
    event.preventDefault();
    var div_area = $(this);
    var id = div_area.attr('id');
    closeOverlay();
    displayCorrectOverlay(id);
    $("#overlay").addClass("out");
 });

 function closeOverlay() {
    if ($("#overlay").hasClass("out")) {
        $("#overlay").removeClass("out");
    }
 }

 function displayCorrectOverlay(id) {
    if (id == "westminster") {
        displayWestminster();
    } else if (id == "central") {
        displayCentral();
    } else if (id == "changing") {
        displayRobing();
    } else if (id == "prince") {
         displayPrince();
    } else if (id == "peers") {
         displayPeers();
    } else if (id == "gallery") {
         displayGallery();
    } else if (id == "lords") {
         displayLords();
    } else if (id == "pm") {
        displayPM();
    } else if (id == "commons") {
        displayCommons();
    } else if (id == "aye") {
        displayAye();
    }
 }

 function displayWestminster() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Westminster Hall</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayCentral() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Central Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayPM() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Members\' Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayAye() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Aye Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayCommons() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Commons Chamber</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayRobing() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Robing Room</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayGallery() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Royal Gallery</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayPeers() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Peers\' Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayPrince() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Prince\'s Chamber</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }

 function displayLords() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Lords Chamber</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }