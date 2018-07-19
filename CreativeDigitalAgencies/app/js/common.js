// Open and close menu
$('.hamburger').click( function(){
    if ( $(this).hasClass('is-active') ) {
        $(this).removeClass('is-active');
        $('#menu').removeClass('active');
        $('.dark').removeClass('index');
    } else {
        $('.hamburger').addClass('is-active');
        $('#menu').addClass('active');
        $('.dark').addClass('index');
    }
});

// Google map
function initMap () {
	var element = document.getElementById('map');

	var options = {
		zoom: 10,
		center: {lat: 41.38879, lng: 2.15899}
	};

	var myMap   = new google.maps.Map(element, options);

	var marker  = new google.maps.Marker({
		position: {lat: 41.38879, lng: 2.15899},
		map: myMap
	})

}

// Add and remove classes for Owl Carousel
$(document).ready(function(){
	  if(document.documentElement.clientWidth <= 768) {
	    $('.custom-carousel').addClass('owl-carousel owl-theme');
	  }
	  else {
	  	$('.custom-carousel').removeClass('owl-carousel owl-theme');
	  }
});

// Owl Carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	nav: true,
  	margin: 40,
  	autoplay: true,
  	autoplayTimeout: 7000,
  	autoplayHoverPause: true,
  });
});

// Styles for IE
var isIE = false || !!document.documentMode;

if (isIE) {
    var head  = document.getElementsByTagName("head")[0];
    var link  = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "css/ie.css";
    head.appendChild(link);
}

// Smooth scroll to anchor
$(document).ready(function(){
	$(".scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1200);
	});
});