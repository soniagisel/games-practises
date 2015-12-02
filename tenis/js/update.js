function update () {
	//Arrow keys
	cursors = tennis.input.keyboard.createCursorKeys();

	if (cursors.left.isDown) {
		racquet_1.body.velocity.x = -500 ;
	} else if (cursors.right.isDown) {
		racquet_1.body.velocity.x = 500 ;
	} else if (cursors.left.isUp || cursors.right.isUp){
		racquet_1.body.velocity.x = 0;
	}


	//A and D keys
	left = tennis.input.keyboard.addKey(Phaser.Keyboard.A);
    right = tennis.input.keyboard.addKey(Phaser.Keyboard.D);

    if (left.isDown) {
		racquet_2.body.velocity.x = -500 ;
	} else if (right.isDown) {
		racquet_2.body.velocity.x = 500 ;
	} else if (left.isUp || right.isUp) {
		racquet_2.body.velocity.x = 0;
	};


	tennis.physics.arcade.collide(ball, racquet_1, scorePlayer1, null, this);
	tennis.physics.arcade.collide(ball, racquet_2, scorePlayer2, null, this);

	function scorePlayer1 (ball, racquet_1) {
		score_racquet1 += 10;
		capocha_score.text = 'Score: ' + score_racquet1;
		lastTouch = 'Capocha';

	};

	function scorePlayer2 (ball, racquet_2) {
		score_racquet2 += 10;
		dj_score.text = 'Score: ' + score_racquet2;
		lastTouch = 'DJ';
	};
};