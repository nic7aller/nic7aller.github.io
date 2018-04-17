$(document).on("click",".image-button-right", function (event) {
    openOverlay(event, $(this));
 });

 $(document).on("click",".image-button-left", function (event) {
    openOverlay(event, $(this));
 });

 function openOverlay(event, div_area) {
    event.preventDefault();
    var id = div_area.attr('id');
    closeOverlay();
    displayCorrectOverlay(id);
    $("#overlay").addClass("out");
 }

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
        '<div class="overlay-pod"><p><b>Commisioned in 1097 and completed by 1099, Westminster Hall is the oldest existing building of the original Palace of Westminster.</b></p>' +
        '<p>This was the starting and ending room on my tour of Parliament.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Hammer-beam roof" src="https://assets3.parliament.uk/iv/main-large//ImageVault/Images/id_1044/scope_0/ImageVaultHandler.aspx.jpg"/>' +
        '<p>The iconic hammer-beam roof was commissioned by Richard II in 1393. ' +
        'At 68 by 240 feet, it was the largest timber roof of the medieval times in Northern Europe.</p>' +
        '<p>I thought the roof was magnificent, but pictures of the roof tend to not turn out very well due to all the natural light. ' +
        'Seeing this in person is a completely different experiecne and well worth it.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt ="New Dawn" src="https://static1.squarespace.com/static/5748303fcf80a1ffcaf1251b/t/5757f1888259b56583545296/1500030903724/New+Dawn+Sculptural+Glass+Light+Installation?format=2500w"/>' +
        '<p><em>New Dawn</em> was unveiled on the 150<sup>th</sup> anniversary of the start of the campaign for women\'s suffrage in the United Kingdom. ' +
        'The colored glass circles represent the scrolls containing the laws that legalized suffrage for women. ' +
        'The number of the glass scrolls lit is determined by the tide at the time of day. ' +
        'By hanging over the entrance to the rest of the Palace, this work symbolizes "women\'s long-awaited access to democracy".</p></div>' +
    '</div></div>');
 }

 function displayCentral() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Central Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>Being centrally located in the Palace of Westminster, the Central Lobby was designed to be a meeting place for members of boths houses and their constituents.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Central Lobby" src="https://assets3.parliament.uk/iv/main-large//ImageVault/Images/id_300/scope_0/ImageVaultHandler.aspx.jpg"/>' +
        '<p>Above the four exits from the room are large mosaic panels, each displaying the patron saint of a member country in the United Kingdom: St. George for England, St. Patrick for Northern Ireland, St. Andrew for Scotland, and St. David for Wales.</p></div>' +
        '<div class="overlay-pod"><p><strong>Fun Fact</strong></p>' +
        'The term "lobbying" originated from constituents meeting in the Central Lobby to meet with their MPs. ' +
        'Even today while Parliament is in session, UK citizens can meet their MPs without an appointment, though one is recommended.</div>' +
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
        '<div class="overlay-pod">' +
        '<p><strong>The Queen makes her first stop in Parliament here for the Opening of Parliament.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Robing Room" src="https://assets3.parliament.uk/iv/main-large//ImageVault/Images/id_297/scope_0/ImageVaultHandler.aspx.jpg"/>' +
        '<p>The main influence of the art in the room was Queen Victoria\'s interest in the story of King Arthur and the Knights of the Round Table. ' +
        'The paintings on the wall depict "chivalric virtues" from scenes in the story for example.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Imperial State Crown" src="https://secure.i.telegraph.co.uk/multimedia/archive/01525/crown-cushion_1525404i.jpg"/>' +
        '<p>This important room contain the Chair of State, and is where the Queen puts on the Imperial State Crown. ' +
        'The only time when this crown is worn outside of coronation day, as well as the only time when the Queen is actually at Parliamnet, is for the (usually) annual Opening of Parliament.</p></div>' +
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