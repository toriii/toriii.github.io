/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("My code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});
$(window).on('mousemove', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});
setInterval(function () {
    $('.logo').css({
        'margin-left': 200 * Math.random() - 100
    });
}, 200);
