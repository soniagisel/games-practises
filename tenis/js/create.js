var court,
	ball,
	racquet_1,
	racquet_2,
	racquets;

function create () {
	tennis.physics.startSystem(Phaser.Physics.ARCADE);

	tennis.stage.backgroundColor = "#DD6E2D";

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

	ball.body.gravity.y = 900;
	ball.body.collideWorldBounds = true;

	ball.body.velocity.setTo(200, 200);
	ball.body.bounce.set(1);

// Racquets ////////////////////////////////////
	racquets = tennis.add.group();

	racquet_1 = racquets.create(380, 510, 'racquet');

	racquet_2 = racquets.create(380, 40, 'racquet');

	racquet_1.scale.setTo(0.1, 0.1);

	racquet_2.scale.setTo(0.1, 0.1);

	racquets.enableBody = true;

	tennis.physics.arcade.enable(racquet_1);
	tennis.physics.arcade.enable(racquet_2);

	racquet_1.body.collideWorldBounds = true;
	racquet_2.body.collideWorldBounds = true;

	racquet_1.body.immovable = true;
	racquet_2.body.immovable = true;
	

};