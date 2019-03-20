$(document).on("click", ".box .menu div", function() {
	const numberIndex = $(this).index();
	if (!$(this).is("active")) {
		$(".box .menu div").removeClass("active");
		$(".box ul li").removeClass("active");
		$(this).addClass("active");
		$(".box ul").find("li:eq(" + numberIndex + ")").addClass("active");
		let listItemHeight = $(".box ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".box ul").height(listItemHeight + "px");
	}
});
