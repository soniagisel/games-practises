$(document).ready(function(){

	TweenMax.from($('#gameContainer'), 2, {
      autoAlpha: 0,
      ease: Power1.easeOut
    });

    TweenMax.from($('.balloons1'), 1, {
    	delay: 1,
    	scale: 0,
    	rotationX:45, 
    	scaleX:0.8, 
    	z:-300,
    	yoyo: true,
    	repeat: -1,
    	ease: Power2.easeInOut
    });

    TweenMax.from($('.btn-spin'), 1, {
    	delay: 1.5,
    	top: -600,
    	ease: Power2.easeOut
    });

    TweenMax.from($('.balloons2'), 1, {
    	delay: 2,
    	scale: 0
    });


    TweenMax.from($('.wheel'), 1, {
    	delay: 2,
    	scale: 0,
    	rotation: 360*3
    });

    TweenMax.from($('.target'), 1, {
    	delay: 1,
    	scale: 100
    });

    TweenMax.to($('.balloons2'), 2, {
    	rotation:"1.25rad", 
    	skewX:"30deg",
    	yoyo: true,
    	repeat: -1
    });

    $('.btn-spin').on('click', function(){
    	$('.btn-spin-down').css('display', 'block');

    	TweenMax.to($('.wheel'), 15, {
    		rotation: 360*30 - Math.random()*120,
    		ease: Power1.easeInOut
    	});
    });
});