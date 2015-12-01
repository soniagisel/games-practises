function update () {
	cursors = tennis.input.keyboard.createCursorKeys();

	if (cursors.left.isDown) {
		racquet_1.body.velocity.x = -300 ;
	} else if (cursors.right.isDown) {
		racquet_1.body.velocity.x = 300 ;
	} 


	left = tennis.input.keyboard.addKey(Phaser.Keyboard.A);
    right = tennis.input.keyboard.addKey(Phaser.Keyboard.D);

    if (left.isDown) {
		racquet_2.body.velocity.x = -300 ;
	} else if (right.isDown) {
		racquet_2.body.velocity.x = 300 ;
	}

	//tennis.physics.arcade.collide(racquets, ball);
};