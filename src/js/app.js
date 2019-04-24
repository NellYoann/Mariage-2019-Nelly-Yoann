$(document).ready(function() {

	launchIntro();

	function launchIntro() {
		var intro = new TimelineMax();

		intro.delay(.5);
		intro.from('.banner .banner-content', 1, {alpha: 0, ease: Power2.easeOut});
		intro.from('.banner .banner-back', 1, {alpha: 0, top: '+=50', ease: Power2.easeOut}, '-=.75');

		intro.play();
	}

});