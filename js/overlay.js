$(document).on("click",".image-button", function (event) {
    event.preventDefault();
    closeOverlay();
    displayCorrectOverlay($(this).attr('id'));
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
    } else if (id == "stephen") {
         displayStephen();
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
        '<img alt="Hammer-beam roof" src="https://farm4.staticflickr.com/3295/2700357003_189d515ea3_o.jpg"/>' +
        '<p>The iconic hammer-beam roof was commissioned by Richard II in 1393. ' +
        'At 68 by 240 feet, it was the largest timber roof of the medieval times in Northern Europe.</p>' +
        '<p>I thought the roof was magnificent, but pictures of the roof tend to not turn out very well due to all the natural light. ' +
        'Seeing this in person is a completely different experiecne and well worth it.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt ="New Dawn" src="https://static1.squarespace.com/static/5748303fcf80a1ffcaf1251b/t/5757f1888259b56583545296/1500030903724/New+Dawn+Sculptural+Glass+Light+Installation?format=2500w"/>' +
        '<p><em>New Dawn</em> was unveiled on the 150<sup>th</sup> anniversary of the start of the campaign for women\'s suffrage in the United Kingdom. ' +
        'The colored glass circles represent the scrolls containing the laws that legalized suffrage for women. ' +
        'The number of the glass scrolls lit is determined by the tide at the time of day. ' +
        'By hanging over the entrance to the rest of the Palace, this work symbolizes "women\'s long-awaited access to democracy."</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/westminsterhall/architecture/the-hammer-beam-roof-/">Westminster Hall information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/2700357003/in/photolist-roYjeG-qiCxH8-2Q7fSn-p3r3zu-216daCq-YrUCXW-nNwwfq-TciAoX-bjQqbW-CifGEm-paj5LX-oycdEP-4ZRqre-5tk7EE-57Gtdh-57Gnyj-gYb7ML-VfXuMw-57BNqg-4mMpsG-nNxvbX-rXpyGK-57BTg6-57G7VA-bUwEe5-57Gjt3-57C34n-eb7S6f-5tgmqF-57C6PR-5tkmJJ-pwQqMJ-5tfh7M-57Gtd5-57BNqF-obYTFe-zrrWC3-VKxFSS-9q8ccP-npx5h5-Rwnenm-57BTge-eb7uSw-5eJjx2-6VZuaM-5tfrnV-5tff1n-5tkkmG-J4A6WD-5tkin3">Hammer-beam roof picture</a>, ' +
        '<a href="https://marybranson.com/new-dawn">New Dawn</a></p></div>' +
    '</div></div>');
}

function displayCentral() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Central Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>Being centrally located in the Palace of Westminster, the Central Lobby was designed to be a meeting place for members of both houses and their constituents.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Central Lobby" src="https://farm4.staticflickr.com/3228/2700311119_498df5bd5e_o.jpg"/>' +
        '<p>Above the four exits from the room are large mosaic panels, each displaying the patron saint of a member country in the United Kingdom: St. George for England, St. Patrick for Northern Ireland, St. Andrew for Scotland, and St. David for Wales.</p></div>' +
        '<div class="overlay-pod"><p><strong>Fun Fact</strong></p>' +
        '<p>The term "lobbying" originated from constituents meeting in the Central Lobby to meet with their MPs. ' +
        'Even today while Parliament is in session, UK citizens can meet their MPs without an appointment, though one is recommended.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/central-lobby/">Information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/2700311119/in/album-72157606360526262/">Picture</a></p></div>' +
    '</div></div>');
}

function displayPM() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Members\' Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>Littered with past Prime Ministers, this room acts as an antechamber for the House of Commons.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Members\' Lobby" src="https://farm4.staticflickr.com/3132/2700327403_e1af599a2b_o.jpg">' +
        '<p>The Lobby contains a bust or statue of past Prime Ministers, including Margret Thatcher and Winston Churchill. ' +
        'In fact, every Prime Minster will have a statue or a bust made and placed in this room. ' +
        'In 100 years that room might look like Sir John Soane\'s House.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Churchill Arch" src="https://assets3.parliament.uk/iv/main-large//ImageVault/Images/id_314/scope_0/ImageVaultHandler.aspx.jpg">' +
        '<p>After the bombings of World War II, the Members\' Lobby was heavily damaged and needed to be repaired. ' +
        'Winston Churchill suggested keeping the war-damaged arch as a reminder of the terrible war, as the arch is above the entrance into the Commons Chamber. ' +
        'The damaged arch now has the name of Churchill Arch in recognition of his suggestion.</p></div>' +
        '<div class="overlay-pod"><p><strong>Fun Fact</strong></p>' +
        '<p>It is a tradition that the Monarch cannot enter the Commons Chamber, sparking a tradition of the House of Commons to be reluctant towards the Monarch. ' +
        'For the Opening of Parliament, a messanger with a black rod must go to the doors under Churchill arch and use the rod to knock on the door three times. ' +
        'Members of Parliament (MP) of the House of Commons then, nonchalatly and on their own time, head to the Lords Chamber to hear the Queen\'s speech. ' +
        'The door has been visible damaged from the knocking over the years.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/members-lobby-churchill-arch/">Information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/2700327403/">Picture</a></p></div>' +
    '</div></div>');
}

function displayAye() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Aye Lobby</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>Members of Parliament (MP) in the House of Commons gather here to vote "aye" on a bill.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Aye Lobby" src="https://farm6.staticflickr.com/5459/17549293252_f1e14b76a6_o.jpg">' +
        '<p>In a small room just north of the Commons Chamber on the side of the government, once voting start for a bill MPs only have a short time to come to this lobby to vote for a bill. ' +
        'For those voting against a bill, they must go to the No Lobby to the south on the side of the opposition.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/site-information/glossary/aye-and-no-lobbies/">Information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/17549293252">Picture</a></p></div>' +
    '</div></div>');
}

function displayCommons() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-left fa-2x"/><span class="overlay-title slab-font">Commons Chamber</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>The Commons Chamber is home to the House of Commons, known for their lively debates.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Commons Chamber" src="https://farm4.staticflickr.com/3006/2700311137_1f07f4cfbe_o.jpg">' +
        '<p>Unlike the ornate Lords Chamber, the Commons Chamber is simpler. ' +
        'This is due to the House of Commons being more related to the common folk, i.e. non-nobility, and the constrained budget of the repairs to the room after the bombings of World War II. ' +
        'For example, there is little gold in the room, as well as normal windows over the stain glass windows found in the Lords Chamber. ' +
        'The Speaker\'s Chair, which is shown above, is simple in comparison to the Royal Throne in the Lords Chamber.</p></div>' +
        '<div class="overlay-pod"><p><strong>Notable Note</strong></p><p>' +
        'The gift shop seems to reflect how the status of the House of Lords is more "noble" than that of the House of Commons with the prices and goods sold with House of Lords branding being more expensive than that of the House of Commons merchandise.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="House of Commons" src="https://farm2.staticflickr.com/1630/25743557151_4a862f2b02_o.jpg">' +
        '<p>The set up of the House of Commons is designed based off of how the original House was organized with opposing benches. ' +
        'The government, the majority party and their allies, sit on the benches to the right of the Speaker\'s Chair, while the opposition sits on the opposing side. ' +
        'During a session, the red lines in the carpeting serve as a "do not cross" line to help keep some civility in the chamber.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/commons-chamber/">Information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/sets/72157606360378346">Empty Commons Chamber picture</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/25743557151/in/album-72157665823186862/">House of Commons picture</a></p></div>' +
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
        '<img alt="Robing Room" src="https://farm4.staticflickr.com/3159/2700327407_b5a3443ee7_o.jpg"/>' +
        '<p>The main influence of the art in the room was Queen Victoria\'s interest in the story of King Arthur and the Knights of the Round Table. ' +
        'The paintings on the wall depict "chivalric virtues" from scenes in the story, for example.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Imperial State Crown" src="https://secure.i.telegraph.co.uk/multimedia/archive/01525/crown-cushion_1525404i.jpg"/>' +
        '<p>This important room contains the Chair of State, and is where the Queen puts on the Imperial State Crown pictured above. ' +
        'The only time when this crown is worn outside of coronation day, as well as the only time when the Queen is actually at Parliamnet, is for the (usually) annual Opening of Parliament.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/robing-room/">Information</a>, '+
        '<a href="https://www.flickr.com/photos/uk_parliament/2700327407/in/album-72157606805480094/">Robing Room picture</a>, ' +
        '<a href="https://www.telegraph.co.uk/news/picturegalleries/royalty/6598082/The-Queens-Speech-and-the-State-Opening-of-Parliament-in-pictures.html?image=12">Imperial State Crown picture</a></p></div>' +
    '</div></div>');
}

function displayGallery() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Royal Gallery</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>' +
        'This space is used for meetings and large gatherings, as well as part of the route of the Queen\'s walk for the Opening of Parliament.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Royal Gallery" src="https://farm4.staticflickr.com/3160/2700327415_9862d63585_b.jpg"/>' +
        '<p>While there are several paintings of past Monarchs on the wall, the majority of the wall space is taken over by two paintings depicting scenes from the Napoleonic Wars. ' +
        'This was the largest room I visited as a part of my tour besides Westminster Hall.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Royal Walk" src="https://us.hellomagazine.com/images/stories/1/2016/05/18/000/177/404/gallery_5_3.jpg"/>' +
        '<p>Once the Queen puts on the Imperial State Crown, she processes through here on her way to the Lords Chamber. ' +
        'The entire event, of course, is televised for people to watch at home.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/royal-gallery/">Information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/2700327415">Empty Royal Gallery picture</a>, ' +
        '<a href="https://us.hellomagazine.com/royalty/12016051814570/queen-elizabeth-wears-crown-opens-uk-parliament/6/">Opening of Parliament picture</a></p></div>' +
    '</div></div>');
}

function displayStephen() {
    $("#overlay").replaceWith('<div id="overlay" class="left">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">St. Stephen\'s Hall</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>St. Stephen\'s Hall connects Westminster Hall to the rest of the Palace with beautiful art.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="St. Stephen\'s Hall" src="https://farm4.staticflickr.com/3189/2700369675_4531fe2a6c_o.jpg">' +
        '<p>This room was built over St. Stephen\'s Chapel, the original location of the House of Commons. ' +
        'It is shocking going from Westminster Hall, which lacks in color and art, into St. Stephen\'s Hall with all the ornateness of the rebuilt Palace.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="St. Stephen\'s Artwork" src="https://farm4.staticflickr.com/3037/2701192648_5272decf07_o.jpg">' +
        '<p>Lining the sides of the hall are statues of famous Members of Parliament (MP) throught history, and paintings of significant historical events in the UK.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/st-stephen-s-hall/">Information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/sets/72157606364297627/">Pictures</a></p></div>' +
    '</div></div>');
}

function displayPrince() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Prince\'s Chamber</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>Opposite of the Throne is the last stop for the Queen on her way to the Throne for the Opening of Parliament.</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Prince\'s Chamber" src="https://farm9.staticflickr.com/8115/8660441468_68964cc20b_o.jpg">' +
        '<p>This room contains potraits of many members of the Tudor line, as well as the centrally located statue of Queen Victoria. ' +
        'The statue can be seen all the way across the Royal Gallery from the exit of the Robing Room.</p>' +
        '<p>The reason for this was to help give Queen Victoria, the person to commission the restoration of the Palace of Westminster, more confidence during the Opening of Parliament. ' +
        'Queen Victoria left the interior design of the Palace up to her husband, who wanted the design to please his wife. ' +
        'He told Victoria to just focus on herself (the statue) while walking towards the Lords Chamber to help her on the important day.</p></div>' +
        '<div class="overlay-pod"><p><strong>Source</strong></p>' +
        '<p><a href="https://www.flickr.com/photos/ukhouseoflords/8660441468">Picture</a></p></div>' +
    '</div></div>');
}

function displayLords() {
    $("#overlay").replaceWith('<div id="overlay" class="right">' +
    '<div class="overlay-header">' +
        '<a onclick="closeOverlay()"><span class="fa fa-angle-right fa-2x"/><span class="overlay-title slab-font">Lords Chamber</span></a>' +
    '</div><div id="custom-scroll" class="overlay-body">' +
        '<div class="overlay-pod"><p><strong>' +
        'The House of Lords meet in "the most lavishly decorated room in the Palace of Westminster."</strong></p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Royal Throne" src="https://c1.staticflickr.com/4/3007/2701203046_d64e596412_b.jpg"/>' +
        '<p>The Lords Chamber contains all three sections of Parliament on the Opening of Parliament, including the Sovereign. ' +
        'While the Royal Throne is in this Chamber, it is not often that you will see the Queen sitting in it.</p></div>' +
        '<div class="overlay-pod"><p><strong>Fun Fact</strong></p>' +
        '<p>On November 5, 1605, Guy Fawkes was found under the Lords Chamber with barrels of gunpowder. ' +
        'Gunpowder Plot, as it is now known, was foiled, and Guy Fawkes was tortured to give up the other conspirators. ' +
        'This is one of the most well-documented cases of the torture methods of that time.</p>' +
        '<p>As a part of Guy Fawkes Day, November 5, the Yeomen Warders search the grounds of Parliament in a ceremonial manner to ensure the grounds are safe.</p></div>' +
        '<div class="overlay-pod">' +
        '<img alt="Election of the first Lord Speaker" src="https://farm4.staticflickr.com/3249/2713947218_385bbfd678_o.jpg">' +
        '<p>The House of Lords is an alternative to the United States\' Senate. ' +
        'Whereas Senators are elected, Lords are appointed based on their expertise in various matters. ' +
        'This House serves to offer more guidance on bills that pertain to the expertise of individual Members. ' +
        'Bills still need to pass a vote through here for it to become a law.</p></div>' +
        '<div class="overlay-pod"><p><strong>Sources</strong></p>' +
        '<p><a href="https://www.parliament.uk/about/living-heritage/building/palace/architecture/palace-s-interiors/lords-chamber/">Lords Chamber information</a>, ' +
        '<a href="https://www.flickr.com/photos/uk_parliament/sets/72157606364064387">Lords Chamber pictures</a>, ' +
        '<a href="http://www.bbc.co.uk/history/british/civil_war_revolution/gunpowder_robinson_01.shtml">Gunpowder Plot information</a></p></div>' +
    '</div></div>');
}