var counter = 1

$(document).ready(function(){
	
	$('#startSwapping').click(function(){
		counter = counter + 1
		$('body').css('background-image','url(images/bg'+ (counter % 4 + 1) +'.jpg)')
	
	})
})
