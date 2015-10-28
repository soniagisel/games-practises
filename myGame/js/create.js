function create() {

	jokerWin.add.sprite(-40, -40, 'green-background');

	jokerWin.cardsArray = [];

	for (var verticalIndex = 0; verticalIndex < 4; verticalIndex++) {

		for (var horizontalIndex = 0; horizontalIndex < 13; horizontalIndex++) {

			/*console.log('verticalIndex: '+ verticalIndex, 'horizontalIndex: '+ horizontalIndex);*/

			var cardSprite = jokerWin.add.sprite(horizontalIndex*75, 
							 verticalIndex*100, 
							 'cards',
							 (verticalIndex*13)+horizontalIndex);

			cardSprite.scale.set(0.7);

			jokerWin.cardsArray.push({
				sprite: cardSprite,
				cardNumber: horizontalIndex+2,
				cardType: verticalIndex
			});
		};
	};	

	var cards = jokerWin.add.sprite(420, 400, 'cards');

	cards.scale.set(1.3);

	cards.animations.add('jump');
	cards.animations.play('jump', 2, true);
	
}


