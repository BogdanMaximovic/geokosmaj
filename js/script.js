$("#fullPage").hide()
$(window).on('load', (e) =>  {
    $("#fullPage").show() 
    $(".loading").hide()
    AOS.init()
});

$(document).ready(function($) {
	$('#main-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 1500);
        return false;
    })
});


