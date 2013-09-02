![General Assembly](assets/images/ga.png)
# FEWD LESSON 13

## Arrays and Iterations

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Review 
* Creating Arrays
* Array Methods
* Iterating Over Arrays Using Loops



## Conditional Review
<aside class="notes">Both (20 Min)
Students create a JS ATM application. Instructions are in the student file. Review answers as a class.
</aside>

**In Class Lab** : ATM Conditional



## Arrays
<aside class="notes">Mart (20 Min)</aside>

//declaring an empty array using the Array constructor.

    var myArr = new Array();

//declaring an empty array using literal notation.
    
    var myArr = [ ];

//Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];

//Elements can be strings, numbers, or boolean.
   
    myArr = ['Hello', , 54.3, true];

//If you leave a blank spot in an array it creates a blank shelf space (undefined) placeholder.



## Arrays
<aside class="notes"></aside>

//Array elements can be fetched by their index number (starts from 0).

    console.log(myArr[0]); // prints Hello
    console.log(myArr[1]); // prints undefined
    console.log(myArr[2]); // prints 54.3
    console.log(myArr[3]); // prints true

//We can insert new values into any space in the array using the positions index.
  
    myArr[1] = 'Stuff';



## Associative Arrays
<aside class="notes"></aside>

... there are no associtive arrays...

* Python : Dictionaries
* Ruby: Hashes
* JS : Objects! 

```
var obj = {
  key1: value1,
  key2: value2
};
```
here are two ways to add new properties to an object:

    obj.key3 = "value3"; // dot notation
    obj["key3"] = "value3"; // square bracket notation

// The first form is used when you know the name of the property. The second form is used when the name of the property is dynamically determined.



## Arrays
<aside class="notes"></aside>
We can overwrite all the elements of an array simply by giving the array new values. Or passing one array into another.

    var fruits = ['Apples', 'Oranges', 'Pears', 'Bananas'];
    myArr = fruits;
    console.log(myArr); //prints Apples, Oranges, Pears, Bananas
    myArr = ['Apples', 'Oranges', 'Pears', 'Bananas'];

What if I would like to know how long my array is (how many elements)?

    console.log(myArr.length); //prints 4

To get the last elements index position I can subtract one (remember indexes start with zero instead of one).

    var pos = myArr.length - 1;
    console.log(myArr[pos]); //prints Bananas

    myArr = ['Apples', 'Oranges', 'Pears', 'Bananas'];



## Arrays
<aside class="notes"></aside>

We can insert on to the end of an Array simply by using the push method.

    myArr.push('Strawberries'); // you can push multiple items onto the end by coma separating if you wish.

    console.log(myArr); //prints Apples, Oranges, Pears, Bananas, Strawberries

    myArr = ['Apples', 'Oranges', 'Pears', 'Bananas', ' Strawberries',];

you can pull the last element off the end using the pop method. myArr.pop();

    console.log(myArr);

prints Apples, Oranges, Pears, Bananas.
Notice Strawberries is now missing.



## Arrays
<aside class="notes"></aside>

    //This goes to index position 2 and after it removes 0 (none) and adds new value of 'Tiger'.
    myArr.splice(2, 0, 'Tiger');

    //prints Apples, Oranges, Tiger, Pears, Bananas where previously was Apples, Oranges, Pears, Bananas. 
    console.log(myArr); 

Tiger has been inserted After Oranges an the others followered have been bumped forward 1 index.

See [MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array) for many more Array methods.




## Code Along My Colleagues Array
<aside class="notes">Both (15 Min)
Show students array syntax and have them create a colleagues array where they put the names of 5 classmates and use document.write() to display all the names. Use another document.write() to write the 2nd element in the array to the browser.
</aside>

**In Class Lab** : Code Along My Colleagues Array on codepen.io



## Exercise Arrays
<aside class="notes">Both (25 Min)
Students complete the exercise.js file by answering questions and printing to the console. Use the index file to verify answers in the browser.
</aside>

**In Class Lab** : Exercise Arrays



## Iterations : While Loop
<aside class="notes"></aside>

```
//SYNTAX: while (condition){
  statement
}
```
```
var fish = ['Snapper', 'Tuna', 'Salmon'];
var i = 0;

while (i < fish.length) {
console.log(fish[i]);
i += 1;
}
```
prints Snapper, Tuna, Salmon



## Iterations : Do-While Loop
<aside class="notes"></aside>

A while statement executes its statements as long as a specified
condition evaluates to true.

```
SYNTAX: do {
  statement
} while (condition);
```
```
var cars = ['Corvette','Mustang','Porsche'];
var i = 0;

do {
  console.log(cars[i]);
  i += 1;
}
while (i < cars.length); 
```
prints Corvette, Mustang, Porsche



## Iterations : For Loop
<aside class="notes"> Kit (30 Min)</aside>

A for loop repeats until a specified condition evaluates to false.

```
SYNTAX: for ([initialExpression]; [condition]; [incrementExpression]){
  statement
}
```
```
var vegetables = ['Broccoli','Peas','Carrots'];

for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}
```
prints Broccoli, Peas, Carrots



## Code Along Loops
<aside class="notes">Both (20 Min)
  To be used to introduce syntax.
</aside>

**Code Along** : Code Along Loops



## Exercise Loops 
<aside class="notes">Both (30 Min)
Students answer the questions in the exercise.js file.
The index.html file shows if they got the correct answer.
Review answers as a class.
</aside>

**In Class Lab** : Exercise Loops



## ATM While Loop
<aside class="notes">Both (15 Min)
Students take ATM_conditional exercise and apply a loop so users can make multiple transactions.
</aside>

**In Class Lab** : ATM While Loop 



## Grocery List
<aside class="notes">Both (45 Min)
Provide the .txt file to students.
Have students create all files from scratch and connect their js file to the html file
Have students print output to the console
Review answers as a class.
</aside>

**In Class Lab** : Grocery List



## Homework
<aside class="notes"></aside>

Complete the ICLs we didn't manage to cover in class.
