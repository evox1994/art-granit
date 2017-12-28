$(document).ready(function(){
	var scroll = $('.b-1-works').offset().top;
	$('.b-1-works-nav a').click(function(){
		if ( !($(this).hasClass("active")) ) {
			$('.b-1-works-nav a').removeClass("active");
			$(this).addClass("active");
			$('body, html').animate({ scrollTop: scroll - 150 }, 800);
		}
		return false;
	});
});