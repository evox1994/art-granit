$(document).ready(function(){
	$('.b-1-slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
	$('.gallery-block').mouseover(function(){
		$(this).addClass("hover");
	});
	$('.gallery-block').mouseout(function(){
		$(this).removeClass("hover");
	});
	$('.b-2-slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
	$('.b-3-inp').click(function(){
		if ( $(this).hasClass("focus") ) {
			$(this).removeClass("focus");
		} else {
			$('.b-3-inp').removeClass("focus");
			$(this).addClass("focus");
		}
	});
	$('body').click(function(event){
		if ( !($(event.target).hasClass("b-3-inp")) ) {
			$('.b-3-inp').each(function(){
				if ( $(this).hasClass("focus") ) {
					$(this).removeClass("focus");
				}
			});
		}
	});
});