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

check("1", $('nav').css('display') == 'none');
check("2", $('#mystery-figure').css('display') == 'block');
check("3", $('form').length == 0);
check("4", $('h2').length == 0);
console.log("Quiz Checking Complete!")