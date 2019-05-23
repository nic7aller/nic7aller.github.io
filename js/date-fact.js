var d = new Date();
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
$.get("http://numbersapi.com/" + (d.getMonth() + 1)+ "/" + d.getDate() + "/date?default=Something+cool+probably+happened+today.", function(data) {
    $("#datefact").text(data.toString());
});