jQuery(document).ready(function() {

	// Full-page 
	new fullpage('.full-page', {
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['01', '02', '03', '04', '05'],
		showActiveTooltip: true,
		loopTop: true,
		loopBottom: true,
		verticalCentered: false,
		onLeave: function(origin, destination, direction) {

			$('.fp-section').removeClass('animated fadeOut faster');
			$('.fp-section.active').addClass('animated fadeOut faster');

		}
	});

	// Blue rectangle move
	$('.experience-option:nth-child(2)').hover(
		function () {
			$('.experience-options').addClass('second-hovered');
		}
	);

	$('.experience-option:nth-child(2)').mouseleave(
		function () {
			$('.experience-options').removeClass('second-hovered');
		}
	);

	$('.experience-option:nth-child(3)').hover(
		function () {
			$('.experience-options').addClass('third-hovered');
		}
	);

	$('.experience-option:nth-child(3)').mouseleave(
		function () {
			$('.experience-options').removeClass('third-hovered');
		}
	);

	// Slick slider
	$('.slider').slick({
    slidesToShow: 3,
    centerMode: true,
    speed: 500,
    centerPadding: 100,
  });

});