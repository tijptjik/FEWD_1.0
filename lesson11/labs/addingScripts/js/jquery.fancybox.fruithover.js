$(document).ready(function(){
	
	/* LETS USE FUNCTIONS TO MAKE AN INSTANCE OF INTERACTING WITH THE DOM REPEATABLE */
	
	//first I want to fade out all the fruit pictures.
	$('#gallery img').fadeTo(1000,0.2); //fadeTo(delay in miliseconds, opacity)
	
	//next I want to create a function that will only run when someone hovers over a fruit image.
	function mouseOn(){
		$(this).fadeTo(20,1); //the keyword 'this' refers to the element that is calling the function in our case it is the individual image that the user has their mouse over top of.
	}
	
	function mouseOff(){
		$(this).fadeTo(500,0.2);
	}
	
	//lastly I want to check if the user is hovering their mouse and call the apropriate function.
	$('#gallery img').hover(mouseOn,mouseOff);

	//add rel attribute to gallery links to add arrow functionality to fancybox plugin
	$('#gallery a').attr('rel','gallery1');

	//apply fancybox plugin
	$('#gallery a').fancybox();

});