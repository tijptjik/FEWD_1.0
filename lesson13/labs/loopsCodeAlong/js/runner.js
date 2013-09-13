// Runner for the exercises

function check(num, answer, correct) {
  if(answer) {
    document.write("<p>Question " + num + ": Correct!</p>");
  } else {
    document.write("<p style=\"color:red;\">Question " + num + ": Try Again </p>");
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

check(1, sum == 55)
check(2, sub == 45)
check(3, big == 96)
check(3, small == -1)
check(5, totalDuplicates == 4)
check(6, totalUniques == 6)

console.log("Quiz Checking Complete!")