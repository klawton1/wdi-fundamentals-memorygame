console.log("JS file is connected to HTML! Woo!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if ((cardOne == cardTwo) && (cardThree == cardFour)) {
	console.log("Got working pairs!");
};
if (cardFour != cardOne){
	alert('These do not match!');
};
*/
var createCards = function(){
	var board = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
		card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}
}
createCards();
