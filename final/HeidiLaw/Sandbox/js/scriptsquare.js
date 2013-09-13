var colourPalette = [
    'rgb(255,154,0)',
    'rgb(255,198,0)',
    'rgb(255,89,0)'
]

$(function(){ // Document-ready shorthand

	$('.boxes:eq(4)').css({ //select boxes by index specified as 4: WORKS
    	backgroundColor: "black"
	})

	//attempt to dynamically pass index number to select boxes; DOES NOT WORK
	// 1. nth-of-type does not take dynamic arguments?

	$('.boxes:nth-of-type("+colourCounter+")').css({
	    backgroundColor: "+colourPalette[colourCounter]+"
	})

	colourCounter = 0;

	$('body').on('click', function () {
	    index = colourCounter % colourPalette.length
	    $(this).css('background-color', colourPalette[index]);
	    colourCounter++;
	})

})
