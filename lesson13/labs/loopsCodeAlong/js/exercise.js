 //Javascript Code Along: Loops
// This is a reference for a code along loop example. It is meant to highlight the difference between loops and provide syntax.

 


//Question 1
//While loops 

var response = 'c'
var counter =  1
response = prompt('Enter \'q\'uit or \'c\'ontinue');

while (response === 'c'){
	
	response = prompt('Enter \'q\'uit or \'c\'ontinue');
	
	console.log(' I ran this loop ' + counter + ' times');
	counter++;
}




//Question 2
//Do while loops

var response = 'c'
var counter =  1
response = prompt('Enter \'q\'uit or \'c\'ontinue');
do{
	
	response = prompt('Enter \'q\'uit or \'c\'ontinue');
	
	console.log(' I ran this loop ' + counter + ' times');
	counter++;
}while (response === 'c')




 //Question 3
 //For Loops

var counter = prompt("Enter a number between 1 - 10")

for (var i = 0; i <= counter; i++){

	console.log(' I ran this loop ' + i + ' times');
}


