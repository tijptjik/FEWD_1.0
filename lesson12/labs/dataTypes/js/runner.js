// Runner for the exercises

function check(num, answer, correct) {
  if(answer) {
    document.write("<p>Question " + num + ": Correct!</p>");
  } else {
    document.write("<p style=\"color:red;\">Question " + num + ": Wrong. Should output " + correct + "</p>");
  }
  document.write("- - - - - - - - - - - - - - - - - - - - - -")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}

check(1, q1 == "Hi There!", "Hi There!");
check(2, q2 == "What's the time?", "What's the time?");
check(3, q3 == 'Title "JavaScript Programming"', "'Title \"JavaScript Programming\"");
check(4, q4 == "Escape \"me\"", "Escape me")
check(5, q5 == 8, 8);
check(6, q6 == 1.5, 1.5);
check(7, q7 == -5, -5);

document.write("Quiz Checking Complete!")