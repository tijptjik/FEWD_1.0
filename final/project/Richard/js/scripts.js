$('nav').on('click','a', selectPanel)

function selectPanel(e){
	target = $(this).data('target')
	$('.panel.active').toggleClass('active')
	$('.panel.' + target).toggleClass('active')
}

