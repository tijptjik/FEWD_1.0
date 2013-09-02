/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/
var balance = 1000;
var transaction;
var amount;

transaction = prompt('(d)eposit, (w)ithdraw? or (q)uit');
amount = parseInt(prompt('How much?'));

do {

	transaction = prompt('(d)eposit, (w)ithdraw? or (q)uit');

	if (transaction == 'd') {
		amount = parseInt(prompt('How much'))
		balance = balance + amount;

	} else if (transaction == 'w'){
		amount = parseInt(prompt('How much'))
		balance = balance - amount;

	} else if {transaction =='q'{
		console.log('Thanks for using our bank service!');
		console.log('Your new balance: $' + balance);

	} else {
		console.log('error on input!');
	}


} while (transaction != 'q')



while (transaction != 'q'){

	transaction = prompt('(d)eposit, (w)ithdraw? or (q)uit');

	if (transaction == 'd') {
		amount = parseInt(prompt('How much'))
		balance = balance + amount;

	} else if (transaction == 'w'){
		amount = parseInt(prompt('How much'))
		balance = balance - amount;

	} else if {transaction =='q'{
		console.log('Thanks for using our bank service!');
		console.log('Your new balance: $' + balance);

	} else {
		console.log('error on input!');
	}
}

for (null; transaction != 'd'; null){
	transaction = prompt('(d)eposit, (w)ithdraw? or (q)uit');

	if (transaction == 'd') {
		amount = parseInt(prompt('How much'))
		balance = balance + amount;

	} else if (transaction == 'w'){
		amount = parseInt(prompt('How much'))
		balance = balance - amount;

	} else if {transaction =='q'{
		console.log('Thanks for using our bank service!');
		console.log('Your new balance: $' + balance);

	} else {
		console.log('error on input!');
}
}

