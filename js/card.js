// $(document).ready(() => { 

// 	(function ($) { 
// 		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
// 		$('.tab ul.tabs li a').click(function (g) { 
// 			let tab = $(this).closest('.tab'), 
// 				index = $(this).closest('li').index();
// 			tab.find('ul.tabs > li').removeClass('current');
// 			$(this).closest('li').addClass('current');
			
// 			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
// 			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
// 			g.preventDefault();
// 		})
// 	})($)
// })

$(document).on("click", ".box .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".box .menu div").removeClass("active");
		$(".box ul li").removeClass("active");

		$(this).addClass("active");
		$(".box ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".box ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".box ul").height(listItemHeight + "px");
	}
});
