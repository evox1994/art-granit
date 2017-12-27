$(document).ready(function(){
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
	$('.b-1-works-nav a').click(function(){
		if ( !($(this).hasClass("active")) ) {
			$('.b-1-works-nav a').removeClass("active");
			$(this).addClass("active");
		}
		return false;
	});
});