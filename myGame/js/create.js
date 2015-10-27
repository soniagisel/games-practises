function create() {

	jokerWin.cardsArray = [];
	for (var verticalIndex = 0; verticalIndex < 4; verticalIndex++) {

		for (var horizontalIndex = 0; horizontalIndex < 13; horizontalIndex++) {
			console.log('verticalIndex: '+ verticalIndex, 'horizontalIndex: '+ horizontalIndex);
			var cardSprite = jokerWin.add.sprite(horizontalIndex*60, verticalIndex*90, 'cards',(verticalIndex*13)+horizontalIndex);
			cardSprite.scale.set(0.7)
			jokerWin.cardsArray.push({
				sprite: cardSprite,
				cardNumber: horizontalIndex+2,
				cardType: verticalIndex
			});
		};
	};	
	
}


