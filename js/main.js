$(document).ready(function(){

    var H_w = $(window).height();
    $('.left-menu').height(H_w);

    var polMenu = $('.left-menu').offset().left;
    var W_m = $('.left-menu').width();
    $('.left-menu').width( (polMenu + W_m) );
    $('.left-menu').css('left',0);

    $('.phone-inp').mask("+7 (999) 999-99-99");
    $('.header-info-zv').fancybox();

    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        $('.left-menu').css('left','auto');
        $('.left-menu').width('auto');
        polMenu = $('.left-menu').offset().left;
        W_m = $('.left-menu').width();
        $('.left-menu').width( (polMenu + W_m) );
        $('.left-menu').css('left',0);

        H_w = $(window).height();
        $('.left-menu').height(H_w);
    }

    $(window).resize(resize);
    resize();

    $('.li-cat').mouseover(function(){
        var pos = $(this).position().top;
        var M_w = $('.left-menu').width();
        if ( $(window).width() > 1000 ) {
            $(this).children('.header-cat').css({
                'display': 'block',
                'top': pos,
                'left': (M_w + 30)
            });
        } else {
            $(this).children('.header-cat').css({
                'display': 'block',
                'top': pos,
                'left': (M_w + 5)
            });
        }
        $(this).addClass("hover");
    });
    $('.li-cat').mouseout(function(){
        $(this).children('.header-cat').css({
            'display': 'none'
        });
        $(this).removeClass("hover");
    });

    $('.mobile-menu').click(function(){
        var W_h = $(window).height();
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $('.header').animate({height: 75}, 500);
            $('.mobile-nav').removeClass("active");
        } else {
            $(this).addClass("active");
            $('.header').animate({height: W_h}, 500);
            $('.mobile-nav').addClass("active");
        }
    });

    $('.header a').click(function(){
        if ( $(window).width() < 768 ) {
            $('.mobile-menu').removeClass("active");
            $('.mobile-nav').removeClass("active");
            $('.header').animate({height: 75}, 500);
        }
    });

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});