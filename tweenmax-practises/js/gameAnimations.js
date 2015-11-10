$(document).ready(function(){

	TweenMax.from($('#gameContainer'), 2, {
      autoAlpha: 0,
      ease: Power1.easeOut
    });

    TweenMax.from($('.balloons1'), 1, {
    	delay: 1,
    	scale: 0
    });

    TweenMax.from($('.balloons2'), 1, {
    	delay: 2,
    	scale: 0
    });

    TweenMax.from($('.target'), 1, {
    	delay: 1,
    	scale: 100
    });

    TweenMax.from($('.btn-spin'), 0.2, {
    	delay: 1.5,
    });
});