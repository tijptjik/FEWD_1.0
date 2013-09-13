var colourPalette = [
    'rgb(255,154,0)',
    'rgb(255,198,0)',
    'rgb(255,89,0)'
]

$('body').css({
    backgroundColor: "-webkit-linear-gradient(bottom, rgb(139,214,186) 22%, rgb(167,255,224) 61%, rgb(201,255,255) 81%)"
})

//RESPONSIVE TO THE 'CLICK' EVENT

colourCounter = 0;



$('body').on('click', function () {
    index = colourCounter % colourPalette.length
    $(this).css('background-color', colourPalette[index]);
    colourCounter++;
})


$('body').on('click', function () {
    index = colourCounter % colourPalette.length
    $(this).css('background-color', -webkit-linear-gradient(bottom, "+'colourPalette[index]'+" 22%, "colourPalette[index + 1]" 61%, rgb(201,255,255) 81%));
    colourCounter++;
})

//salvaged
// +$('body').css({backgroundColor: colourPalette[1]})
// +
// +$('body').css({
// +    background: "-webkit-gradient(linear, left top, left bottom, from("+colourPalette[3]+"), to("+colourPalette[4]+"))" 
// +});
// +

//  $('body').on('click', function(){
//    index = colourCounter % colourPalette.length
//    $(this).css('background-color', colourPalette[index]);
//    colourCounter++;
// -
//  })
 
// -console.log("read")
// +//make values responsive to mousemove
// +$('body').on('mousemove', valueIncrease)
// +
// +  function valueIncrease(val){ 
// +    colourCounter = colourCounter ++
// +  }