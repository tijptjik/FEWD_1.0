// Runner for the exercises

function check(num, answer) {
  if(answer) {
    console.log("Question " + num + ": Correct!");
  } else {
    console.log("Question " + num + ": Wrong");
  }
  console.log("- - - - - - - - - - - - - - - - - - - - - -")
}

check("1", $("header > p").text() == "Welcome!");
check("2", $("header h1 + img").attr("src") == "http://placekitten.com/600/200");
check("3", $("#fig1 > div").length == 1 && $("#fig1 > div").hasClass("pulse"));
check("4", $("#fig1 > figcaption").length == 1 && $("#fig1 > figcaption").text() == "Cosmic Cat");
check("5", $("p > span").length == 4);

console.log("Quiz Checking Complete!");