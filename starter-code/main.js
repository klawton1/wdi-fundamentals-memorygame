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
		var card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		card.setAttribute('id', i);
		card.addEventListener('click', isTwoCards);
		board.appendChild(card);
	}
	return board;
}
function shuffleBoard(){
	board = document.getElementById('game-board');
	board.innerHTML = "";
	createCards();
}

createCards();

var cardsInPlay = [];


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
		isMatch(cardsInPlay);
	}
	if (cardsInPlay.length === 8){
		console.log("4 cards");
		isMatch(cardsInPlay);
	}
}
function isMatch(pair){
	if(pair.length === 4){
		if (pair[1] === pair[3]){
			alert("pick a different card!");
			cardsInPlay.pop();
			cardsInPlay.pop();
		}
		else if (pair[0] === pair[2]){
			for(var i=0; i<cards.length; i++) {
				var card = document.getElementsByClassName("card")[i];
			}
		}
		else{
			alert("not a match!");
			for(var i=0; i<cards.length; i++) {
				var card = document.getElementsByClassName("card")[i];
				card.innerHTML = "";
			}
			shuffle(cards);
			shuffleBoard();
			cardsInPlay = [];
		}
	}
	if(pair.length === 8){
		if (pair[5] === pair[7]){
			alert("pick a different card!");
			cardsInPlay.pop();
			cardsInPlay.pop();
		}
		else if (pair[4] === pair[6]){
			alert("you win!");
			for(var i=0; i<cards.length; i++) {
				var card = document.getElementsByClassName("card")[i];
				card.innerHTML = "";
			}
			shuffle(cards);
			shuffleBoard();
			cardsInPlay = [];
		}
		else{
			alert("not a match!");
			for(var i=0; i<cards.length; i++) {
				var card = document.getElementsByClassName("card")[i];
				card.innerHTML = "";
			}
			shuffle(cards);
			shuffleBoard();
			cardsInPlay = [];
			console.log(cards)
		}
	}
}
function shuffle(cardList){
	var newCards = [];
	length = cardList.length;
	for (var i = 0; i < length; i++) {
		index = (i+1) % 4;
		console.log(index);
		newCards[i] = cardList[index];
	}
	cards = newCards;
	console.log(cards);
}








