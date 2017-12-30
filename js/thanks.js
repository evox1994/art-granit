$(document).ready(function(){

	var H_h = $('.header').height();
	var H_w = $(window).height();
	var H_t = H_w - H_h;

	$('.b-1-table').height(H_t);

	$(window).resize(function(){
		H_h = $('.header').height();
		H_w = $(window).height();
		H_t = H_w - H_h;

		$('.b-1-table').height(H_t);
	});
});