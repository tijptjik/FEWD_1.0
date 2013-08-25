/*

We're going to make our ATM example application even more efficient.

There are two distinct things happening in this application. Users are either making a withdrawal, or a deposit. 
Lets break this logic into two functions. Only declare your balance, amount and response variables once.

1. Create 2 functions deposit() and withdrawal().
2. If you have time, implement a loop and such that the user could deposit and withdraw more than one time until it enter (q)quit.

*/


	var balance = 1000;
	var response = prompt('(d)eposit or (w)ithdraw');

		var amount = prompt('How much?');
		amount = parseInt(amount);
		
		if(response === 'd')
		{
			balance = balance + amount;
			console.log('You just deposited $' + amount + '.00 and your balance is $' + balance + '.00');
		}
		else
		{
			balance = balance - amount;
			console.log('You just withdrew $' + amount + '.00 and your balance is $' + balance + '.00');
		}	
	
	console.log('Thank you for ATMing with us, your balance is : $' + balance + '.00');
	
