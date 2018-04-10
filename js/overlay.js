$(document).on("click",".image-button-right", function (event) {
    event.preventDefault();
    var div_area = $(this);
    var id = div_area.attr('id');
    closeOverlay();
    displayCorrectOverlay(id);
    $("#overlay").css({'width':'40%','right':'40%', 'visibility':'visible'});
 });

 $(document).on("click",".image-button-left", function (event) {
    event.preventDefault();
    var div_area = $(this);
    var id = div_area.attr('id');
    closeOverlay();
    displayCorrectOverlay(id);
    $("#overlay").css({'width':'40%','left':'40%','visibility':'visible'});
 });

 function closeOverlay() {
    if ($("#overlay").hasClass("right")) {
        $("#overlay").css({'width':'0','left':'100%', 'visibility':'hidden'});
    } else {
        $("#overlay").css({'width':'0','right':'100%', 'visibility':'hidden'});
    }
 }

 function displayCorrectOverlay(id) {
    if (id == "westminster") {
        displayWestminster();
    } else if (id == "central") {
         
    } else if (id == "changing") {
         
    } else if (id == "victoria") {
         
    } else if (id == "meeting") {
         
    } else if (id == "gallery") {
         
    } else if (id == "lords") {
         
    } else if (id == "pm") {
         
    } else if (id == "commons") {
         
    } else if (id == "yay") {
         
    }
 }

 function displayWestminster() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Westminster Hall</span></a>' +
    '</div><div class="overlay-body">' +
        '<div class="overlay-pod"><p>Random text in Latin</p></div>' +
    '</div></div>');
 }