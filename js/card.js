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
