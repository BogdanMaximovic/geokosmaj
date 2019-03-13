$(document).ready(() => {
    let scrollingDiv = $("#scrollingDiv");
    $('.back_to_top').css({ "display": "none" });
    let offset = 600;
    let duration = 100;
    let scroll_duration = 800;
    $(window).scroll(() => {
        if ($(this).scrollTop() > offset) {
            $('.back_to_top').fadeIn(duration);
        } else {
            $('.back_to_top').fadeOut(duration);
        }
    })
    $('.back_to_top').click((event) => {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, scroll_duration);
        return false;
    })
})