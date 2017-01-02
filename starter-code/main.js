console.log("JS file is connected to HTML! Woo!");
/*
if ((cardOne == cardTwo) && (cardThree == cardFour)) {
	console.log("Got working pairs!");
};
if (cardFour != cardOne){
	alert('These do not match!');
};
*/
var cards = ['queen', 'king', 'queen', 'king'];

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
	card.setAttribute('id', i);
}

for (var i=0; i<cards.length; i++) {
	var card = document.getElementsByClassName("card")[i];
	card.addEventListener('click', isTwoCards);
}

function isTwoCards(){
	cardType = this.getAttribute('data-card');
	cardsInPlay.push(cardType);
	cardsInPlay.push(this.getAttribute('id'));
	console.log(cardsInPlay);
	if (cardType === 'king'){
		this.innerHTML = "<img src='diamonds-884195_640.png' alt='king card'>";
	}
	if (cardType === 'queen'){
		this.innerHTML = "<img src='clubs-884198_640.png' alt='queen card'>";
	}
	if (cardsInPlay.length === 4){
		console.log("2 cards");
		var different = isMatch(cardsInPlay);
		if (different) {
			cardsInPlay = [];
		}
	}
}
function isMatch(pair){
	if (pair[1] === pair[3]){
		alert("pick a different card!");
		cardsInPlay.pop();
		cardsInPlay.pop();
		return false;
	}
	else if (pair[0] === pair[2]){
		alert("it's a match!");
		for(var i=0; i<cards.length; i++) {
			var card = document.getElementsByClassName("card")[i];
			card.innerHTML = "";
		}
		return true;
	}
	else{
		alert("not a match!");
		for(var i=0; i<cards.length; i++) {
			var card = document.getElementsByClassName("card")[i];
			card.innerHTML = "";
		}
		return true;
	}

}







