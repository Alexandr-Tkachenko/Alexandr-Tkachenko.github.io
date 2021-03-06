$(document).ready(function(){

	// Preloader
	setTimeout(function() {
		var loader = $('.loader');
		if ( !loader.hasClass('animated') )
		{
			loader.addClass('done');
		}
	}, 1000);


	// Header height	
	function headerHeight () {

		const frontPageTop = document.querySelector('.header');
		const headerCompositionWrapper = document.querySelector('.header-composition-wrapper');
		const viewportHeight = window.innerHeight;


		if (window.innerWidth <= 1024) {
			if (frontPageTop) {
				frontPageTop.style.height = viewportHeight + 'px';
			 }
		};

		if ( $(window).height() <= 530) {
			if (frontPageTop) {
				frontPageTop.style.height = 530 + 'px';
			}
		};

	};

	headerHeight ();


	// Open and close search input
	$('.header-search-button').click( function(){
		setTimeout( headerHeight, 1000);
		$('.header-search-form').addClass('is-active');
		$('.hamburger').addClass('is-hidden');
		$('.header-logo').addClass('is-hidden');	
		$('.header-nav').addClass('is-hidden');
		$('.header-icons').addClass('is-hidden');
		$('.header-search').focus();
	});

	$('.header-close-form').click( function(){
		setTimeout( headerHeight, 1000);
		$('.header-search-form').removeClass('is-active');
		$('.hamburger').removeClass('is-hidden');
		$('.header-logo').removeClass('is-hidden');	
		$('.header-nav').removeClass('is-hidden');	
		$('.header-icons').removeClass('is-hidden');	
	});


	// Mmenu
	$("#my-menu").mmenu({
				 navbar: false,
				"extensions": [
						"border-full",
						"fx-panels-none",
						 "shadow-panels",
				 ]
			}, {
				 offCanvas: {
						pageNodetype: "section"
				 }
			});

	var api = $("#my-menu").data( "mmenu" );

	api.bind( "open:start", function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind( "close:after", function() {
		$('.hamburger').removeClass('is-active');
	});


	// Owl-carousel
	$(".header-carousel").owlCarousel({
		items: 1,
		smartSpeed: 1000,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 7500,
		autoplayHoverPause: true,
	});

	$(".posts-carousel").owlCarousel({
		smartSpeed: 600,
		nav: true,
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeOut: 6000,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots: false,
		autoplayHoverPause: true,
		responsive: {

				0: {
					items: 1,
				},

				500: {
					items: 2,
				},

				856: {
					items: 3,
				},

		}
	});

	$(".partners-carousel").owlCarousel({
		smartSpeed: 600,
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeOut: 8000,
		items: 4,
		autoplayHoverPause: true,
		responsive: {

				0: {
					items: 1,
				},

				520: {
					 items: 2,
				},

				810: {
					 items: 3,
				},

				1060: {
					 items: 4,
				},

		}
	});


	// MixItUp
	var mixer = mixitup('.portfolio-projects');


	// Maginific Popup
	$('.video-play-button').magnificPopup({		

		type: 'iframe',
		iframe: {
					markup: '<div class="mfp-iframe-scaler animated zoomIn faster">'+
									'<div class="mfp-close"></div>'+
									'<iframe src="https://www.youtube.com/embed/LXnTYNkTsYc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
									'</div>', 
		},
		removalDelay: 300,		

	});


	// Excellent photo height
	function photoHeight () {

		var photoWidth = $('.excellent-photo').width();

		if(document.documentElement.clientWidth < 465) {
			$('.excellent-photo').css(
				{height: photoWidth/0.68}
			);
		} else {
			$('.excellent-photo').css(
				{height: '' }
			);
		}

	}

	photoHeight();

	window.onresize = photoHeight;


	// CounterUp
	$('.count-number').counterUp({
		time: 3000,
	});


	// Wow.js	
	new WOW().init();


	// Styles for fucking IE
	var isIE = false || !!document.documentMode;

	if (isIE) {
	    var body  = document.getElementsByTagName("body")[0];
	    var link  = document.createElement("link");
	    link.rel  = "stylesheet";
	    link.href = "css/ie.css";
	    body.appendChild(link);
	}

});
