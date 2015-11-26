var court,
	ball,
	racquets;

function create () {
	tennis.physics.startSystem(Phaser.Physics.ARCADE);

	tennis.stage.backgroundColor = "#DD6E2D";

// Court ///////////////////////////////////////
	court = tennis.add.sprite(35, -105, 'court');

	court.scale.setTo(1.3, 1.3);

	tennis.physics.arcade.enable(court);

	court.enableBody = true;

	court.body.immovable = true;
	

// Ball ////////////////////////////////////////
	ball = tennis.add.sprite(450, 0, 'ball');

	ball.scale.setTo(0.5, 0.5);

	ball.enableBody = true;

	tennis.physics.arcade.enable(ball);

	ball.body.bounce.y = 0.7;
	ball.body.gravity.y = 900;
	ball.body.collideWorldBounds = true;

// Racquets ////////////////////////////////////
	racquets = tennis.add.group();

	var racquet_1 = racquets.create(400, 400, 'racquet');

	var racquet_2 = racquets.create(400, 50, 'racquet');

	racquet_1.scale.setTo(0.2, 0.2);

	racquet_2.scale.setTo(0.1, 0.1);

	racquets.enableBody = true;

	tennis.physics.arcade.enable(racquet_1);
	tennis.physics.arcade.enable(racquet_2);
	

};