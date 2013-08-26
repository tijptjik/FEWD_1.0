	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 
	 var firstname = prompt("What is your first name?");
	 var lastname = prompt("What is your last name?");



	//Create a new variable called full name and store the users full name.
	var fullname = firstname + " " + lastname;
	
	//Print the full name to the console.
	console.log(fullname);
	

	//Prompt the user for their age.
	var age = prompt("What is your age?");


	//Add 10 to the age and print the output to the console.
	age= parseInt(age);
	console.log(age +10);
	or
	age = parseInt(age) + 10;
	console.log (age);
	
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.
if (age >=28) {
	console.log("adult");
	}
	else {
		console.log("minor");
	}

	
	//Verify if the first name is "General" and the last name is NOT "Assembly"

if (firstname == "General" && lastname != "Assembly") {
	console.log('TRUE');
	else	{
		console.log('FALSE');
	}
		

}