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

check("1", "booleanValue" in window && booleanValue());
check("2", "q2" in window && q2 == "Hello World!");
check("3", "q3" in window && q3 == "1 + 1 = 2");
check("4", "q4" in window && q4 == 136794 && "multiply" in window && typeof multiply == "function");
check("5", "smallNumber" in window && typeof smallNumber == "function" && smallNumber(1, 2) == 1 && smallNumber(2, 1) == 1);
check("6", "bigNumber" in window && typeof bigNumber == "function" && bigNumber(1, 2) == 2 && bigNumber(2, 1) == 2);
check("7", "addArray" in window && typeof addArray == "function" && addArray([1, 2, 3, 4]) == 10 && addArray(testArray) == 55);
check("8", "theBigOne" in window && typeof theBigOne == "function" && theBigOne([1, 2, 3, 4]) == 4 && theBigOne(testArray) == 10);
console.log("Quiz Checking Complete!");