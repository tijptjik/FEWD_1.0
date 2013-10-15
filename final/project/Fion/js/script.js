$(document).ready(function(){

$('.animalbox > img').css('width','300px').after('<br>').addClass('animalpic').css("position","relative"); 

$('.animalbox > img').after('<a class="like" href="#"><img src="images/like_outline.jpg"></a>')

$('.like').css('position','absolute').css('top','30px').css('left','265px'); 

$('br + p').addClass('location').prepend('<img src="./images/marker.jpg" width="15px">' + ' '); 

$('.like').hide(); 

$('.animalbox > img').after('<a class="liked" href="#"><img src="images/like.jpg"></a>')

$('.liked').css('position','absolute').css('top','30px').css('left','265px'); 

$('.liked').hide(); 


$('.animalbox').each(function(){
  $(this).hover(
    function(){
      $(this).find('.animalpic').animate({opacity: 0.9}, 50), $(this).find('.like').show(); 
    },
    function(){
      $(this).find('.animalpic').animate({opacity: 1}, 50), $(this).find('.like').hide();
    }
  );
});

$('.like').each(function(){
  $(this).click(function(){
    $(this).hide();
    $(this).siblings(".liked").show();
  })
})

$('.liked').each(function(){
  $(this).click(function(){
    $(this).hide();
    $(this).siblings(".like").show();
  })
})


$('p + a').addClass('species').css('padding-left','20px') 

$('.species').hover(function(){
	$(this).css('background-color','yellow'); 
}, function(){
	$(this).css('background-color','transparent'); 
})

$('species a').click(function(){
  console.log('123'); 
}); 
 
$(window).load(function(){
  $('#maincontent').masonry({
     columnWidth: 170,
     itemSelector: '.animalbox'
    }).imagesLoaded(function() {
     $('#maincontent').masonry('reloadItems');
    });
}); 
}); 


  // <img src="a.jpg" style="position: relative; top: 0; left: 0;"/>
  // <img src="b.jpg" style="position: absolute; top: 30; left: 70;"/>