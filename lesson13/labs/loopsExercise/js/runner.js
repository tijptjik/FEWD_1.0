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

check(1, myArray[0]==1 && myArray[1]==2 && myArray[2]==3 && myArray[3]==4 && myArray[4]==5 && myArray[5]==6 && myArray[6]==7 && myArray[7]==8 && myArray[8]==9 && myArray[9]==10)
check(2, sub == 45)
check(3, largest_num == 96)
check(4, small == -1)
check(5, totalDuplicates == 4)
check(6, totalUniques == 6)

document.write("Quiz Checking Complete!")