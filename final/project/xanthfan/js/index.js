$(document).ready(function(){

  $("#Login").click(function(){
    $("#center_content").empty();
    var code=$("<iframe class=\"changingContent\" src=\"login.html\" width=centerWidth height=centerHeight frameborder=\"0\"></iframe>"); 
    $("#center_content").append(code); 
  });


  $("#About").click(function(){
    $("#center_content").empty();
    var code=$("<img class =\"changingContent\" src=\"images/sea.jpg\">"); 
    $("#center_content").append(code); 
  });

   $("#buttonMap").click(function(){
    $("#center_content").empty();
      var centerWidth = $("#center_content").attr("width");
      var centerHeight = $("#center_content").attr("height");
      var code=$("<iframe class=\"changingContent\" src=\"mapTest.html\" width=centerWidth height=centerHeight frameborder=\"0\"></iframe>"); 
    $("#center_content").append(code); 
  });

   $("#Press").click(function(){
    // alert("Text: " + $("#test").text());
  });

   $("#Follow").click(function(){
    // alert("Text: " + $("#test").text());
  });

   $("#Newsletter").click(function(){
    // alert("Text: " + $("#test").text());
  });

   $("#Contact").click(function(){
    // alert("Text: " + $("#test").text());
  });

});


    // $.getJSON("http://xanthfan.github.io/FEWD/final/data/sample.json",function(json){
    //   console.log("point2");
    //   $.each(json.results, function(i, course){
    //     $("#section_3").append(course.title);
    //    });




     