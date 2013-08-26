//single line comment

/* Multi
   Line
   Comment */

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){
	
	/*======= VARIABLES ======*/
	
	//Let's declare some variables
	var x; //var is a keyword that declare a variable
	
	//naming vars start with letter a-z A-Z remaining 0-9 a-z A-Z, you can also use - and _ never use spaces ' ' or orillegal charcters (! % $ ?)
	
	//Let's store a value in x
	x = 10;
	
	//Declare and store
	var y = 20;
	
	//Declare multiple vars at once using ,
	var a = 1,
		b = 2, 
		c = 3;
			 
	//perform math on variables
	var myMath = x + y; 
	
	//alert(myMath);
	console.log(myMath);
	
	x = 5;
	
	myMath = x + y; 
	
	console.log(myMath);
	
	/*======= CONSTANTS ======*/
	
	const STAY_THE_SAME = 1;
	
	STAY_THE_SAME = 2;
	
	console.log(STAY_THE_SAME);
	
	/*======= DATA TYPES =======

	Numbers: integers (whole numbers) ex: 2, floats (decimals numbers) ex: 3.56789
	strings (text) ex: 'hello' or "hello"
	boolean ex: true or false
	null (empty)
	undefined (not yet defined)
	*/
	
	console.log(typeof STAY_THE_SAME); //typeof is a keyword that allows us to check the data type.
	
	var hamburger = 'Yumm';
	
	console.log(typeof hamburger);
	
	var combineStuff = '10' + 5; //concatenation
	
	console.log('Adding a string to a number does this: ' + combineStuff + ' weird!');

	var stringy = 12 + '';
	//concatenating empty string changes number to a string.
	
	console.log(typeof stringy);
	
	combineStuff = parseInt('10') + 5;
	//parseInt changes a string to a whole number.
	
	console.log(combineStuff);
	
	//In Javascript each variable we define is a new object.
	
	/*======= jQuery Syntax ========
	
	$(selector).method(parameters);
	
	'$' refers to the jQuery object.
	'selector' asks jQuery to go out into the DOM (Document Object Model) web page and select an element(s). In jQuery we can use all of the familr selectors we use in CSS yay!
	'method' these are various actions and commands attached to the jQuery object that allow us to do things like fade elements in an out or change the content of the DOM and much much more.
	'parameters' are options we can set for each method.
	*/
	
	//Let's spend some time practicing using jQuery to select elements using familiar CSS selector statements passed in as a string.
	$('h1').css({'background':'yellow'});
	
	//Let's store a jQuery selector in a var for later use.
	var storedObj = $('p');
	
	var total = storedObj.size(); //size count the selected elements and return a number.
	
	//console.log(total);
	
	$('#status').html('There are currently '+total+' stored objects');
	
	/*======= CONDITIONALS ========*/
	
	//check if total is more than two (true or false) if true so do {something} else {do something different}.
	
	if(total > 2){
		$('#decide').addClass('green').html('The number is greater than 2.');
	}else{
		$('#decide').addClass('red').html('The number is less than or equal to 2.');
	}
	
	/*======= OPERATORS ==========
	
	== equals (coercion)
	!= not equals (coercion)
	=== equals (checks type and value)
	!== not equals (checks type and value)
	< less than
	> greater than
	<= less than or equal
	>= greater than or equal
	&& and
	|| or
	+ plus
	- minus
	* multiply
	/ divide
	% modulus
	+= adds to current value
	-= subtracts from current value etc...
	++ increments by one
	-- de-increments by one
	
	==============================*/
	
});