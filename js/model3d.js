$(document).ready(function(){
	var scroll = $('.b-1-works').offset().top;
	$('.b-1-works .pam-work a').fancybox();

	$('.work-3d a').fancybox();

	$('.b-1-works-nav a').click(function(){
		if ( !($(this).hasClass("active")) ) {
			$('.b-1-works-nav a').removeClass("active");
			$(this).addClass("active");
			$('body, html').animate({ scrollTop: scroll - 150 }, 800);
		}
		return false;
	});

	$('.b-1-inp').click(function(){
		if ( $(this).hasClass("focus") ) {
			$(this).removeClass("focus");
		} else {
			$('.b-1-inp').removeClass("focus");
			$(this).addClass("focus");
		}
	});

	$('body').click(function(event){
		if ( !($(event.target).hasClass("b-1-inp")) ) {
			$('.b-1-inp').each(function(){
				if ( $(this).hasClass("focus") ) {
					$(this).removeClass("focus");
				}
			});
		}
	});
});