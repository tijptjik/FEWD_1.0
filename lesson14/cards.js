// Card Game

var ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
var suits = ['Hearts','Spades','Clubs','Diamonds']

function card(){
	this.suit = suits[Math.floor(Math.random() * suits.length)];
	this.rank = ranks[Math.floor(Math.random() * ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}

// Internalise

function card(){
	ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	suits = ['Hearts','Spades','Clubs','Diamonds']
	this.suit = suits[Math.floor(Math.random() * suits.length)];
	this.rank = ranks[Math.floor(Math.random() * ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}

// Lesson in Global Namespaces

var cardGame = {}

function card(){
	cardGame.ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	cardGame.suits = ['Hearts','Spades','Clubs','Diamonds']
	this.suit = cardGame.suits[Math.floor(Math.random() * cardGame.suits.length)];
	this.rank = cardGame.ranks[Math.floor(Math.random() * cardGame.ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}

// ... Or just do it once ...

var cardGame = {
	ranks : ['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
	cardGame.suits : ['Hearts','Spades','Clubs','Diamonds']
}

function card(){
	this.suit = cardGame.suits[Math.floor(Math.random() * cardGame.suits.length)];
	this.rank = cardGame.ranks[Math.floor(Math.random() * cardGame.ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}
