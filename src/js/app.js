$(document).ready(function() {

	// reset scroll
	if ('scrollRestoration' in history) {
		history.scrollRestoration = 'manual';
	}

	launchIntro();

	function launchIntro() {
		var intro = new TimelineMax();

		window.scrollTo(0, 0);

		intro.delay(.5);
		intro.from('.banner .banner-back', 1, {alpha: 0, top: '+=50', ease: Power2.easeOut});
		intro.staggerFrom('.banner .banner-content *', 1, {alpha: 0, ease: Power2.easeOut}, .25);

		intro.to(window, 1.5, {scrollTo: '#song', ease: Power2.easeInOut}, '+=.5');

		intro.set('.second-batch', {css: {display: 'none'}});
		intro.staggerFrom('.first-batch .text', 1.5, {alpha: 0, top: '+=50'}, 2);
		intro.delay(1);

		intro.to('.first-batch', 1, {alpha: 0});
		intro.set('.first-batch', {css: {display: 'none'}});

		intro.set('.second-batch', {css: {display: 'block'}});
		intro.staggerFrom('.second-batch .text', 1.5, {alpha: 0, top: '+=50'}, 4);
		intro.delay(.5);

		intro.play();
	}

});