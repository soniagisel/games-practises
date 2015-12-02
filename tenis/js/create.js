var court,
	ball,
	racquet_1,
	racquet_2,
	score_racquet1 = 0,
	score_racquet2 = 0,
	lastTouch,
	racquets;

function create () {
	tennis.physics.startSystem(Phaser.Physics.ARCADE);

	tennis.stage.backgroundColor = "#DD6E2D";
//  With this, the ball won't collide with the bottom and the top of the world.
	tennis.physics.arcade.checkCollision.down = false;
	tennis.physics.arcade.checkCollision.up = false;

// Court ///////////////////////////////////////
	court = tennis.add.sprite(80, -15, 'court');

	court.scale.setTo(0.9, 0.9);

	tennis.physics.arcade.enable(court);

	court.enableBody = true;

	court.body.immovable = true;
	

// Ball ////////////////////////////////////////
	ball = tennis.add.sprite(450, 0, 'ball');

	ball.scale.setTo(0.5, 0.5);

	ball.enableBody = true;

	tennis.physics.arcade.enable(ball);

	ball.body.velocity.setTo(270, 270);
	ball.body.bounce.set(1);

	ball.body.collideWorldBounds = true;

	ball.checkWorldBounds = true;
	ball.events.onOutOfBounds.add(function(){
	    //alert('Game over!');
	    //location.reload();

	    if (lastTouch = 'Capocha') {
	    	//alert('DJ Wins!') ;
	    	finalScore = tennis.add.text(370, 250, 'DJ Wins!!! ', { fontSize: '45px', fill: '#000' });
	    } else if (lastTouch = 'DJ') {
	    	finalScore = tennis.add.text(370, 250, 'Capocha Wins!!! ', { fontSize: '45px', fill: '#000' });
	    };

	}, this);


// Racquets ////////////////////////////////////
	racquets = tennis.add.group();

	racquet_1 = racquets.create(360, 480, 'capocha');

	racquet_2 = racquets.create(360, 20, 'dj');

	racquet_1.scale.setTo(1, 1);

	racquet_2.scale.setTo(1, 1);

	racquets.enableBody = true;

	tennis.physics.arcade.enable(racquet_1);
	tennis.physics.arcade.enable(racquet_2);

	racquet_1.body.collideWorldBounds = true;
	racquet_2.body.collideWorldBounds = true;

	racquet_1.body.immovable = true;
	racquet_2.body.immovable = true;


	//Scores
	capocha_score = tennis.add.text(16, 540, 'Capocha: ' + score_racquet1, { fontSize: '32px', fill: '#000' });
	dj_score = tennis.add.text(16, 16, 'DJ: ' + score_racquet2, { fontSize: '32px', fill: '#000' });

};