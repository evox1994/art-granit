$(document).ready(function(){

	$('.b-1-top a').fancybox();

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