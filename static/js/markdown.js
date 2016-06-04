$(document).ready(function () {
    var markedStr = marked($('.marked').text());
    $('.marked').html(markedStr);
});