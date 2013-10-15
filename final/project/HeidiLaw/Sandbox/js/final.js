/** OVERALL **/

// $('container').on('click','nav a', function(){
//     $('div[class^="look"]').removeClass('active')
//     target = $(this).text()
//     $('.' + target).addClass('active')
// }

// $('body').on('click', 'body', function(){
// 	console.log('sorted');
// 	$(this).removeClass('disappear');
// })

$('.buttons .gohex').on('click', function(){
	$('.hex').removeClass('disappear')
})

$('.buttons .gosquare').on('click', function(){
	$('.transition').fadeIn('slow').delay(800)
	$(this).on('mousemove', function(){$('.transition').fadeOut('fast');})
	$('.square').removeClass('disappear')
	$('.hex').addClass('disappear')
})

$('.buttons .textinput').on('click', function(){
	var input=prompt("What message would you like to display?")
	$('.text').text(input);
});
/** HEX **/ 

console.log("ok")

var colourCounter = 0;
var colourPalette = [ // be careful to add spaces if you want to match colours
    'rgb(255, 154, 0)',
    'rgb(255, 198, 0)',
    'rgb(255, 89, 0)',
    'rgb(255, 209, 0)',
    'rgb(255, 252, 0)',
    'rgb(255, 167, 0)',
    'rgb(255, 198, 0)',
    'rgb(255, 89, 0)',
    'rgb(255, 252, 0)'
    ]

var colourPalette2 = [
	'rgb(5, 24, 84)',
	'rgb(5, 51, 84)',
	'rgb(7, 32, 115)',
	'rgb(48, 34, 69)',
	'rgb(44, 30, 107)',
	'rgb(5, 24, 84)',
	'rgb(5, 51, 84)',
	'rgb(7, 32, 115)',
	'rgb(48, 34, 69)',
	'rgb(44, 30, 107)',
]


$(function(){ // Document-ready shorthand

	$('body').on('mousemove', function () {
		// Set the background, looping through the colour using a colour.
		// Counter isn't needed if you use indexOf(colour) like I did in 
		// the next example.
	    idx = colourCounter % colourPalette.length
	    $('.hex .top').css('border-bottom-color', colourPalette2[idx])
		$('.hex .middle').css('background-color', colourPalette2[idx])
		$('.hex .bottom').css('border-top-color', colourPalette2[idx])
	    // $(this).css('background-color', colourPalette[idx]);
	    colourCounter++;
	})

	// $('body').on('mousemove','.hex', function(e){
	// 	// cycle through the colours when clicking on individual boxes
	// 	// oh yeah! Checks colour first, then checks what's the next 
	// 	// colour in the array, then sets the colour to the next one.
	// 	colour = $(this).css('background-color')
	// 	next = (colourPalette.indexOf(colour) + 1) % colourPalette.length 
	// 	$(this).css('background-color', colourPalette[next])
	// })

	// $('.boxes:eq(4)').css({ // set the 5th box as black - how dark! 
 //    	backgroundColor: "black"
	// })

})

/** SQUARES **/
var colourCounter1 = 0;
var colourPaletteS = [ // be careful to add spaces if you want to match colours
    'rgb(255, 154, 0)',
    'rgb(255, 198, 0)',
    'rgb(255, 89, 0)',
    'rgb(255, 209, 0)',
    'rgb(255, 252, 0)',
    'rgb(255, 167, 0)']

var colourPaletteS2 = [
	'rgb(255, 209, 0)',
	'rgb(255, 253, 64)',
	'rgb(255, 189, 64)',
	'rgb(255, 252, 0)',
	'rgb(255, 207, 115)',
	'rgb(255, 229, 115)',
	'rgb(255, 167, 0)',
	'rgb(225, 220, 64)',
	'rgb(225, 253, 115)',
]

$(function(){ // Document-ready shorthand

	// $('.boxes').each(function(i, elem){ 
	// // for each box loop through the colourPallette, and  provide set the 
	// // background to the next colour. So cool! Try resizing, nice effect :)
	// 	idx = i % colourPaletteS2.length
	// 	$(elem).css('background-color', colourPalette2[idx])
	// })

	$('body').on('click', function () {
		// Set the background, looping through the colour using a colour.
		// Counter isn't needed if you use indexOf(colour) like I did in 
		// the next example.
	    idx = colourCounter1 % colourPaletteS2.length
	    $(this).css('background-color', colourPaletteS2[idx]);
	    colourCounter1++;
	})

	$('body').on('mousemove','.boxes', function(e){
		// cycle through the colours when clicking on individual boxes
		// oh yeah! Checks colour first, then checks what's the next 
		// colour in the array, then sets the colour to the next one.
		colour = $(this).css('background-color')
		next = (colourPaletteS2.indexOf(colour) + 1) % colourPaletteS2.length 
		$(this).css('background-color', colourPaletteS2[next])
	})

	// $('.boxes:eq(4)').css({ // set the 5th box as black - how dark! 
 //    	backgroundColor: "black"
	// })

})

