$(document).ready(function(){
	var scroll = $('.b-1-works').offset().top;
	$('.pam-work').mouseover(function(){
		$(this).addClass("hover");
	});
	$('.pam-work').mouseout(function(){
		$(this).removeClass("hover");
	});
	$('.dop-punkt').click(function(){
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		return false;
	});
	$('.b-1-buttons a').click(function(){
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		return false;
	});
	$('.b-1-works-nav a').click(function(){
		if ( !($(this).hasClass("active")) ) {
			$('.b-1-works-nav a').removeClass("active");
			$(this).addClass("active");
			$('body, html').animate({ scrollTop: scroll }, 800);
		}
		return false;
	});
});