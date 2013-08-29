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

check("1", "lunch" in window && lunch && lunch.sandwich == "Peanut Butter" && lunch.drink == "Apple Juice" && lunch.price == 3.50);
check("2", "q2" in window && q2 == '{"sandwich":"Peanut Butter","drink":"Apple Juice","price":3.5}');
check("3", "q3" in window && q3 && q3.sandwich == "Peanut Butter" && q3.drink == "Apple Juice" && q3.price == 3.50);
console.log("Quiz Checking Complete!");