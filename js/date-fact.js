var d = new Date();
$.get("https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + (d.getMonth() + 1)+ "/" + d.getDate() + "/date?default=Something+cool+probably+happened+today.", function(data) {
    $("#datefact").text(data.toString());
});