/* 

Project Name: Cookie Monster 
Client: Cookie Monster
Author: Alex Notov | http://twitter.com/zealoushacker
Developed @ General Assembly in SF and NYC

*/

// Let's wait till the page is ready to be used
//
// To do that we may use jQuery's ready function $()
//  This is shorthand for $(document).ready()
//  jQuery listens for the DOM's document to fire its ready event
//  and then calls a function, known as a listener when the ready
//  event is fired and jQuery finds out about it
//  This is known as attaching an event listener to the document's
//  ready event with jQuery.
//
//  You may read more about it here: http://api.jquery.com/ready/
$(
  //  When the page is ready to be used, we need to respond to that
  //   so we write an anonymous function (the listener function)
  //   so that jQuery can do something  when the page is finished loading. 

  function(event) {
    // get the bg number from the css definition 
    //  use the jquery css function to get background image url
    //  extract the number of the background image with regexp
    var currentBgNum = parseInt(
      $("body") 
        .css("background-image") 
        .match(
          /(\d+).jpg\)$/)[1], 
          10 
      ),
      swapInterval;

    // this function is responsible for swapping backgrounds
    function swapBackgrounds() {
      var bgUrl; // this will be used to construct the bg url

      // we only have 4 bg images
      // when we have reached the fourth, reset back to 1
      // otherwise increment by 1
      if (currentBgNum === 4) {
        currentBgNum = 1;
      } else {
        currentBgNum += 1;
      }

      // construct the new background url
      bgUrl = "images/bg" + currentBgNum + ".jpg";

      // output what's happening to the console for debugging
      console.log("swapping backgrounds...");
      console.log("current bg", $("body").css("background-image"));

      // swap the bg images
      $("body").css("background-image", "url(" + bgUrl + ")").fadeIn("slow");

      // let's record the new bg url to the console for debugging
      console.log("swapping to bg", $("body").css("background-image"));
    }

    // every 5 seconds (5000 milliseconds, swap backgrounds)
    swapInterval = setInterval(swapBackgrounds, 5000); 

    // when the #stopSwapping button is clicked
    $("#stopSwapping").click(function(event) {
      // swap the text to give user feedback
      $(this).text("OK! We'll keep that one.")
        .delay(2000) // give the user 2 seconds to read the feedback text
        .fadeOut("slow"); // fade the button out

      clearInterval(swapInterval); // clear the swapInterval
    });
  }
);
