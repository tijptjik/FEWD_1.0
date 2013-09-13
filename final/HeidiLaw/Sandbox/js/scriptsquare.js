var colourCounter = 0;
var colourPalette = [ // be careful to add spaces if you want to match colours
    'rgb(255, 154, 0)',
    'rgb(255, 198, 0)',
    'rgb(255, 89, 0)']

$(function(){ // Document-ready shorthand

	$('.boxes').each(function(i, elem){ 
	// for each box loop through the colourPallette, and  provide set the 
	// background to the next colour. So cool! Try resizing, nice effect :)
		idx = i % colourPalette.length
		$(elem).css('background-color', colourPalette[idx])
	})

	$('body').on('click', function () {
		// Set the background, looping through the colour using a colour.
		// Counter isn't needed if you use indexOf(colour) like I did in 
		// the next example.
	    idx = colourCounter % colourPalette.length
	    $(this).css('background-color', colourPalette[idx]);
	    colourCounter++;
	})

	$('body').on('click','.boxes', function(e){
		// cycle through the colours when clicking on individual boxes
		// oh yeah! Checks colour first, then checks what's the next 
		// colour in the array, then sets the colour to the next one.
		colour = $(this).css('background-color')
		next = (colourPalette.indexOf(colour) + 1) % colourPalette.length 
		$(this).css('background-color', colourPalette[next])
	})

	$('.boxes:eq(4)').css({ // set the 5th box as black - how dark! 
    	backgroundColor: "black"
	})

})
