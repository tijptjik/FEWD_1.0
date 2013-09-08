/*
	Only add code to this file.
*/

var input = prompt('you okay? (Y) or (N)');

if (input == 'Y'|| input == 'y') {
	$('.box').hide();
	$('.box2').show(1000).css("background-color", "blue");
} else {
	alert("nothing cool!")
}
