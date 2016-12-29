//Navigation Opacity Effect
$(document).ready(function(){
	$(window).scroll(function() { // check if scroll event happened
		if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
  			$("#navigation").css({"opacity": "0.95", "padding": "10px 0px 10px"}); 
		} else {
  			$("#navigation").css({"opacity": "0.85", "padding": "30px 0px 30px"}); 
		}
	});


//Scroller Effect
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
	  			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html, body').animate({
	          		scrollTop: target.offset().top
	        		}, 1000);
	        		return false;
	      		}
			}
			});
	});


	$('#linkedin, #github, #soundcloud, #resume, #email').hover(function() {
		$(this).addClass("floating");
		
	}, function() {
		$(this).removeClass("floating");
		
	});


	$('.project').hover(function() {
		$(".cover",this).addClass("cover_darken");
		// $(".cover").css({"opacity": "0.75", "background-color": "black"}); 
		$(this).switchClass("hidden_text", "show_text", 500);
		console.log("I work");
		
	}, function() {
		$(".cover", this).removeClass("cover_darken");
		// $(".cover").css({"opacity": "0", "background-color": "black"});
		$(this).switchClass("show_text", "hidden_text", 500);
		
	});




	
	console.log("I'm still working!");


	// Timeline Effects:


	// Portfolio Slider:

	// $('.autoplay').slick({
	//   arrows: true,
	//   dots: true,
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   autoplay: true,
	//   autoplaySpeed: 3000,
	// });

	// Modal:
	$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    	});
	});

});
