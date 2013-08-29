/**
 * Basic use of while, do while and for loops.
 *
 * All 3 loops below print the number for 1 to 10.
 */

// While loop
document.write("<h3>While loop</h3>");
var i = 0;
var num;
while (i < 10) {
  num = i + 1; // i starts from 0 to 10
  document.write(num + "<br>");
  i++;
}

// Do while loop
document.write("<h3>Do while loop</h3>");
var i = 0;
var num;
do {
  num = i + 1; // i starts from 0 to 10
  document.write(num + "<br>");
  i++;
} while (i < 10)

// For loop
document.write("<h3>For loop</h3>");
for (var i = 0; i < 10; i++) {
  num = i + 1; // i starts from 0 to 10
  document.write(num + "<br>");
}

/**
 * Use for loop to print every element in an array.
 * This could be done on while or do while loops too.
 */
var zoo = ["lion", "Tiger", "Elephant", "Penguin", "Kaola", "Pig", "Duck"];
 
document.write("<h3>Array iteration (for loop)<h3>");
for (var i = 0; i < zoo.length; i++) {
  document.write("zoo[" + i + "]: " + zoo[i] + "<br>");
}

/**
 * Use while loop to iterate an array
 */
document.write("<h3>Array iteration (while loop)<h3>");
var i = 0; // THIS IS THE FIRST INPUT IN for(var i = 0; xxx; xxx;)
while (i < zoo.length) { // THIS IS THE SECOND INPUT IN for(xxx; i < zoo.length; xxx;)
  document.write("zoo[" + i + "]: " + zoo[i] + "<br>");
  i++; // THIS IS THE THIRD INPUT IN for(xxx; xxx; i++;)
}