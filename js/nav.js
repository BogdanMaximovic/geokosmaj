$(() => {
    $('.menu-tab').click(() => {
        $('.menu-hide').toggleClass('show');
        $('.menu-tab').toggleClass('active');
    });
    $('a').click(() => {
        $('.menu-hide').removeClass('show');
        $('.menu-tab').removeClass('active');
    });
});