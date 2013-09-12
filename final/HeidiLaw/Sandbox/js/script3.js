console.log("check");

var colourPalette = [
	'rgb(255,153,0)',
	'rgb(191,134,48)',
	'rgb(166,99,0)',
	'rgb(255,178,64)',
	'rgb(255,199,115)'
	]



colourCounter = 0;

$('body').css({backgroundColor: colourPalette[1]})

$('body').css({
    background: "-webkit-gradient(linear, left top, left bottom, from("+colourPalette[3]+"), to("+colourPalette[4]+"))" 
});

// $('body').css({
//     background: "-webkit-gradient(linear, left top, left bottom, from(rgb(255,178,64)), to(rgb(255,199,115))" 
// });

//looping through the colourPalette indexes
$('body').on('click', function(){
	index = colourCounter % colourPalette.length
	$(this).css('background-color', colourPalette[index]);
	colourCounter++;
})

//make values responsive to mousemove
$('body').on('mousemove', valueIncrease)

	function valueIncrease(val){ 
		colourCounter = colourCounter ++
	}