$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 101) {
			$('.nav-container').addClass("f-nav logosmall");
		} else {
			$('.nav-container').removeClass("f-nav logosmall");
		}
	});
	$("a.anchor").anchorAnimate({offset:40});
});



