console.log("JS file is connected to HTML! Woo!");
/*
if ((cardOne == cardTwo) && (cardThree == cardFour)) {
	console.log("Got working pairs!");
};
if (cardFour != cardOne){
	alert('These do not match!');
};
*/
var cards = ['queen', 'queen', 'king', 'king'];

var createCards = function(){
	var board = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}
	return board;
}

createCards();

var cardsInPlay = [];

for (var i=0; i<cards.length; i++){
	var card = document.getElementsByClassName("card")[i];
	card.setAttribute('data-card', cards[i]);
}

for (var i=0; i<cards.length; i++) {
	var card = document.getElementsByClassName("card")[i];
	card.addEventListener('click', isTwoCards);
}

function isTwoCards(){
	cardType = this.getAttribute('data-card');
	cardsInPlay.push(cardType);
	console.log(cardsInPlay);
	if (cardType === 'king'){
		this.innerHTML = "<img src='diamonds-884195_640.png' alt='king card'>";
	}
	if (cardType === 'queen'){
		this.innerHTML = "<img src='clubs-884198_640.png' alt='queen card'>";
	}
	if (cardsInPlay.length === 2){
		console.log("2 cards");
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
function isMatch(cards){
	if (cards[0] === cards[1]){
		alert("it's a match!");
		for(var i=0; i<cards.length; i++) {
			var card = document.getElementsByClassName("card")[i];
			card.innerHTML = "";
		}
		return true;
	}
	alert("not a match!");
	for(var i=0; i<cards.length; i++) {
			var card = document.getElementsByClassName("card")[i];
			card.innerHTML = "";
		}
	return false;
}







