var platforms;
var dude;
//var enemies;

function create() {
//  Adding the background. 
//  It´s added first, so it´ll be rendered first, and the other objects will appear over it.
	jokerWin.add.sprite(0, 0, 'background');

//  We're going to be using physics, so enable the Arcade Physics system
 	jokerWin.physics.startSystem(Phaser.Physics.ARCADE);
	
//  The platforms group contains the ground and the 2 ledges we can jump on
	platforms = jokerWin.add.group(); 

//  We will enable physics for any object that is created in this group
    platforms.enableBody = true; 

// Here we create the ground.
   var ground = platforms.create(0, jokerWin.world.height - 64, 'ground');

//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
   	ground.scale.setTo(2, 2);

//  This stops it from falling away when you jump on it
    ground.body.immovable =  true;

//  Now let's create two ledges
	var ledge = platforms.create(400, 400, 'ground'); 

	ledge.body.immovable = true;

	ledge = platforms.create(-150, 200, 'ground');

	ledge.body.immovable = true;


	//  Creating a caracter, will render sencond after the background.
	dude = jokerWin.add.sprite(32, jokerWin.world.height - 150, 'dude');

//  Enabling physics on the caracter 
	jokerWin.physics.arcade.enable(dude);

//  Player physics properties. Give the little guy a slight bounce.
    dude.body.bounce.y = 0.5;
    dude.body.gravity.y = 200;
    dude.body.collideWorldBounds = true;

//  Our two animations, walking left and right.
    dude.animations.add('left', [0, 1, 2, 3], 10, true);
    dude.animations.add('right', [5, 6, 7, 8], 10, true);





////////////////////////////////////////////////////////////////////////////////////////////
 
	
	// jokerWin.cardsArray = [];

	// for (var verticalIndex = 0; verticalIndex < 4; verticalIndex++) {

	// 	for (var horizontalIndex = 0; horizontalIndex < 13; horizontalIndex++) {

	// 		enemies = jokerWin.add.group();

	//         //  This creates a new Phaser.Sprite instance within the group
	//         //  It will be randomly placed within the world and use the 'cards' image to display
	//         enemies.create(360 + Math.random() * 300, 150 + Math.random() * 100, 'cards');

	//         /*var cardSprite = jokerWin.add.sprite(horizontalIndex*75, 
	// 					 verticalIndex*100, 
	// 					 'cards',
	// 					 (verticalIndex*13)+horizontalIndex);*/

	// 		/*cardSprite.scale.set(0.7);*/

	// 		jokerWin.cardsArray.push({	
	// 			sprite: enemies,
	// 			cardNumber: horizontalIndex+2,
	// 			cardType: verticalIndex
	// 		});

	// 	};
	// };	
	
}


