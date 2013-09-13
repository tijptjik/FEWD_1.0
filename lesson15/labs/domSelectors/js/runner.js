// Runner for the exercises

function check(num, answer) {
  if(answer) {
    console.log("Question " + num + ": Correct!");
  } else {
    console.log("Question " + num + ": Wrong");
  }
  console.log("- - - - - - - - - - - - - - - - - - - - - -")
}

function fuzzCompare(s1, s2) {
  return s1.toLowerCase().trim() == s2.toLowerCase().trim();
}

check("1", "q1" in window && q1 && q1.length == 5);
check("2", "q2" in window && q2 && q2.length == 1);
check("3", "q3" in window && q3 && q3.length == 1 && q3[0] && fuzzCompare(q3[0].tagName, 'img'))
check("4", "q4" in window && q4 && q4.length == 2);
check("5", $("header h1").text() == "My Page");
check("6", $("blockquote").html() == "<span>no quote</span>");
check("7", $("h2").css("color") == "rgb(0, 128, 0)");  // eek, this is a bad way of testing for this..
check("8", $("body").css("background-color") == "rgb(255, 192, 203)");
check("9", $("p").css("font-family") == "Georgia" && $("p").css("color") == "rgb(0, 0, 255)");

console.log("Quiz Checking Complete!")