function update() {
//  Collide the player and the stars with the platforms
	jokerWin.physics.arcade.collide(dude, platforms);

	var cursors = jokerWin.input.keyboard.createCursorKeys() ;


	//  Reset the players velocity (movement)
    dude.body.velocity.x = 0;

    if (cursors.left.isDown) {
    
        //  Move to the left
        dude.body.velocity.x = -150;
        dude.animations.play('left');
    }   
    
    else if (cursors.right.isDown) {
    
        //  Move to the right
        dude.body.velocity.x = 150;
        dude.animations.play('right');
        
    }    
    
    else {
        //  Stand still
        dude.animations.stop()
        dude.frame = 4;
    }    

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && dude.body.touching.down) {
        dude.body.velocity.y = -300;
    };  


    jokerWin.physics.arcade.collide(stars, platforms);

    jokerWin.physics.arcade.overlap(dude, stars, collectStar, null, this );

    function collectStar (dude, star) {
        star.kill();

        score += 10;
        scoreText.text = 'Score: ' + score;
    }
    
}
