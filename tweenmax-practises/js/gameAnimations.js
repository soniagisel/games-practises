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

    TweenMax.from($('.btn-spin'), 1, {
    	delay: 1.5,
    	top: -600,
    	ease: Power2.easeOut
    });

    $('.btn-spin').on('click', function(){
    	$('.btn-spin-down').css('display', 'block');

    	TweenMax.from($('.wheel'), 15, {
    		rotation: 360*30,
    		ease: Power1.easeInOut
    	});
    });
});