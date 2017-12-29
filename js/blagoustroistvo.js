$(document).ready(function(){
	$('.b-1-slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
	$('.b-2-asort a').fancybox();
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