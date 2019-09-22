function getResumeTemplates() {
    $.get('templates/resume-edu.hbs', function (data) {
        var template = Handlebars.compile(data);
        $("#edu").html(template);
    }, 'html');
    $.get('templates/resume-work.hbs', function (data) {
        var template = Handlebars.compile(data);
        $("#work").html(template);
    }, 'html');
    $.get('templates/resume-projects.hbs', function (data) {
        var template = Handlebars.compile(data);
        $("#projects").html(template);
    }, 'html');
    $.get('templates/resume-skills.hbs', function (data) {
        var template = Handlebars.compile(data);
        $("#skills").html(template);
    }, 'html');
    $.get('templates/resume-extra.hbs', function (data) {
        var template = Handlebars.compile(data);
        $("#extra").html(template);
    }, 'html');
}