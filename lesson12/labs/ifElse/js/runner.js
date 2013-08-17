// Runner for the exercises

function check(num, answer) {
  if(answer) {
    document.write("<p>Question " + num + ": Correct!</p>");
  } else {
    document.write("<p>Question " + num + ": Wrong</p>");
  }
  document.write("<p>- - - - - - - - - - - - - - - - - - - - - -</p>")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}

check(1, timePeriod == "Open for business");
check(2, partOfWeek == "End");

document.write("Quiz Checking Complete!")