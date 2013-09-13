var colourPalette = [
    'rgb(255,154,0)',
    'rgb(255,198,0)',
    'rgb(255,89,0)'
]

//for test
$('body').css({
    backgroundColor: "black"
})

colourCounter = 0;

//select body and change colour with click event
//incPercent & decPercent to be assigned as % for gradients

$('body').on('click', function () {
    index = colourCounter % colourPalette.length
    $(this).css('background-color', colourPalette[index]);
    colourCounter++;
    incPercent = colourCounter % 100;
    decPercent = (100 - incPercent);
})
