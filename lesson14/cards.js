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
	var ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	var suits = ['Hearts','Spades','Clubs','Diamonds']
	this.suit = suits[Math.floor(Math.random() * suits.length)];
	this.rank = ranks[Math.floor(Math.random() * ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}

// Lesson in Global Namespaces

var deck = {}

function card(){
	deck.ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	deck.suits = ['Hearts','Spades','Clubs','Diamonds']
	this.suit = deck.suits[Math.floor(Math.random() * deck.suits.length)];
	this.rank = deck.ranks[Math.floor(Math.random() * deck.ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}

// ... Or just do it once ...

var deck = {
	ranks : ['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
	suits : ['Hearts','Spades','Clubs','Diamonds']
}

function card(){
	this.suit = deck.suits[Math.floor(Math.random() * deck.suits.length)];
	this.rank = deck.ranks[Math.floor(Math.random() * deck.ranks.length)];
	this.show = function(){
		return this.suit + this.rank;
	}
}

// ... Refactor this code ...

var deck = {
	ranks : ['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
	suits : ['Hearts','Spades','Clubs','Diamonds']
}

function card(){
	this.suit = choice(deck.suits);
	this.rank = choice(deck.ranks);
	this.show = function(){
		return this.suit + this.rank;
	}
}

function choice(arr){
      return arr[Math.floor(Math.random() * arr.length)]
}