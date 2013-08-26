// Runner for the exercises

function check(num, answer) {
  if(answer) {
    console.log("Question " + num + ": Correct!");
  } else {
    console.log("Question " + num + ": Wrong");
  }
  console.log("- - - - - - - - - - - - - - - - - - - - - -")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}

check(1, q1 === true);
check(2, q2 === true);
check(3, q3 === false)
check(4, q4 === true)
check(5, q5 === false)

console.log("Quiz Checking Complete!")