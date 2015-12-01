function update () {
	//Arrow keys
	cursors = tennis.input.keyboard.createCursorKeys();

	if (cursors.left.isDown) {
		racquet_1.body.velocity.x = -300 ;
	} else if (cursors.right.isDown) {
		racquet_1.body.velocity.x = 300 ;
	} else if (cursors.left.isUp || cursors.right.isUp){
		racquet_1.body.velocity.x = 0;
	}


	//A and D keys
	left = tennis.input.keyboard.addKey(Phaser.Keyboard.A);
    right = tennis.input.keyboard.addKey(Phaser.Keyboard.D);

    if (left.isDown) {
		racquet_2.body.velocity.x = -300 ;
	} else if (right.isDown) {
		racquet_2.body.velocity.x = 300 ;
	} else if (left.isUp || right.isUp){
		racquet_2.body.velocity.x = 0;
	}


	tennis.physics.arcade.collide(ball, racquets);
};