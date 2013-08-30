// Runner for the exercises

function check(num, answer) {
  if(answer) {
    console.log("Question " + num + ": Correct!");
  } else {
    console.log("Question " + num + ": Wrong");
  }
  console.log("- - - - - - - - - - - - - - - - - - - - - -");
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}

check("1", "q1" in window && q1 == "http://placekitten.com/200/300");
check("2", $("#fig1 img").attr("src") == "http://placekitten.com/500/200");
check("3", "q3" in window && q3 == "banner");
check("4", $("#the-facts li").hasClass("success"));
check("5", $("#fig2").hasClass("awesome"));
check("6", $("p.warn").length === 0);
check("7", $("#the-facts li.success").length === 3);
console.log("Quiz Checking Complete!");
