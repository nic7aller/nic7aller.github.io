var d = new Date();
$.get("http://numbersapi.com/" + (d.getMonth() + 1)+ "/" + d.getDate() + "/date?default=Something+cool+probably+happened+today.", function(data) {
    $("#datefact").text(data.toString());
});