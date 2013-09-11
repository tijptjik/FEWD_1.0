var colourPalette = [
	"#FF8100",
	"#BF7830",
	"#A65400",
	"#FFA040",
	"#FFBA73"
	]

colourCounter = 0;

$('body').on('click', function(){
	index = colourCounter % colourPalette.length
	$(this).css('background-color', colourPalette[index]);
	colourCounter++;

})

console.log("read")