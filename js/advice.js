$.getJSON("https://api.adviceslip.com/advice", function(data) {
    var advice = data.slip.advice
    $("#advice").text(advice);
});