// $('#s2').cycle({ 
//     fx: 'scrollLeft'
//     speed: 2500; 
//     pause: 1;
// });

 
$(document).ready(function() {
  // You original code
  // $('.pics').cycle({
	//   fx: 'scrollLeft'  // there should be a comma
	// 	 speed: 2500;      // should be comma instead of semi colon
	// 	 pause: 1;         // no comma for the last entry
	// });

  // Check if the cycle plugin is loaded properly
  // $('.pics').cycle('fade');

  // Fixed version
  $('.sliderkit').cycle({
    fx: 'scrollLeft',
    speed: 3500,
    pause: 1, // true to enable "pause on hover"
    timeout: 3500,
  });
});

// $('.selectpicker').selectpicker({
//       style: 'btn-info',
//       size: 4
//   });







//...
 


