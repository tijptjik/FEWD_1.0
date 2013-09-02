// Runner for the exercises

function check(num, answer) {
  if(answer) {
    document.write("<p>Question " + num + ": Correct!</p>");
  } else {
    document.write("<p style=\"color:red;\">Question " + num + ": Try Again.</p>");
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


check(1, q1 && q1.length == 3 && q1[0] == 'New York' && q1[1] == 'London' && q1[2] == 'San Francisco')
check(2, q2 && q2 == 'New York')
check(3, q3 && q3 == 'San Francisco')
check(4, q4 && q4 == 13)
check(5, q5 && q5.length == 7 && q5[0] == 'New York' && q5[1] == 'London' && q5[2] == 'San Francisco'&& q5[3] == 'Berlin' && q5[4] == 'Sydney' && q5[5] == 'Boston' && q5[6] == 'LA')
check(6, q6 && q6 == 7)

document.write("<h3>Checking Complete!</h3>")