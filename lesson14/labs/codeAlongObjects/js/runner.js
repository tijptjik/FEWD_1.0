// Runner for the exercises

function check(num, answer) {
  if(answer) {
    document.write("<p>Question " + num + ": Correct!</p>");
  } else {
    document.write("<p style=\"color:red;\">Question " + num + ": Try Again.</p>");
  }
  document.write("<p>- - - - - - - - - - - - - - - - - - - - - -</p>");
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}

check("1", "q1" in window && q1 !== undefined && is_empty(q1));
check("2", "q2" in window && q2 && q2.pages == 215);
check("3", "q3" in window && q3 && q3.pages == 256 && q3.title == "Javascript is Cool, bro");
check("4", "q4" in window && q4 && q4 == "red");
check("5", "q5" in window && q5 && q5 == "Racing Green" && car.color == "Racing Green");
check("6", "q6" in window && q6 && q6 == "Marc Jacobs");
check("7", "q7" in window && q7 && q7 == 30 && car.passenger && car.passenger['user-name'] == 'Marc Jacobs' );
console.log("Quiz Checking Complete!");