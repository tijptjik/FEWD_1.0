/**
 * Javascript Exercise: Objects
 */

/**
 * Question 1:
 * Write a funtion named "q1" that prints out "my first function" when executed
 */
function q1(){
	console.log("my first function");
}

/**
 * Question 2: 
 * Define a variable named "q2". Then, define a function named "excitement" that takes in a single
 * string and adds a "!" to the end of it and stores it in q2. Execute that function with the string
 * "Happy"
 * Hint: Remember, you can use a "+" to joing two strings together.
 */
 var q2;
 function excitement(text) {
 	q2 = text + '!'; 
}

excitement("Happy");


/**
 * Question 3:
 * Define a function called "multiply" that takes in 3 arguments, all numbers, and multuiplies them
 * together. Log the result
 */
 function multiply (x,y,z) {
 	var ans = x * y * z ;
 	console.log(ans);
 }