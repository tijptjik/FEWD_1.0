![General Assembly](assets/images/ga.png)
# FEWD LESSON 14

## Functions & Javascript Objects

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Review 
* Functions
* Javascript Object
* JSON: Javascript object in string



## Review
<aside class="notes">Kit (30 Min)
Homework or any other concept for reviews
</aside>

**Review**



## Functions
<aside class="notes">Kit (?? Min)</aside>

* What is a function?
  * A well defined task
  * Resuseable
  * A function could return a value for further process
* Why we need a function?
  * The same task could be shared in different parts of the program
  * Scalable and easier to maintain
  * Treat function as a blackbox to make the code cleaner



## Functions
<aside class="notes"></aside>

**Syntax**

```
function functionName(arg1, arg2) {
  // Body of function
}

```

* keyword: function (just like var when declaring variable)
* function name: functionName
* input arguments: arg1, arg2 (Mutiple values are allowed)
* body of fucntion: the code inside {} is executed when the function is called (similar to the {} in "if" and "for" statement.)



## Functions
<aside class="notes"></aside>

**Example**

```
function helloWorld() {
  console.log("Hello World");
}
```

* How to run this function in console?
  * helloWorld;
  * OR
  * helloWorld();



## Functions
<aside class="notes"></aside>

**Another example**

```
function addAndPrint(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}
```



## Functions
<aside class="notes">Kit (20 Min)</aside>

**In Class Lab** : Code Along Basic Functions



## Functions
<aside class="notes"></aside>

**Syntax**

```
function functionName(arg1, arg2) {
  // Body of function

  return returnValue;
}

```

* keyword: function, return
* function name: functionName
* input arguments: arg1, arg2 (Mutiple values are allowed)
* body of fucntion: the code inside {} is executed when the function is called (similar to the {} in "if" and "for" statement.)
* return value: returnValue



## Functions
<aside class="notes"></aside>

**Example**

```
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
```



## Functions
<aside class="notes"></aside>

**Real life example**

```
function calculateTax(income, allowances) {
  var tax = 0;
  var taxRate = [0.02, 0.07, 0.12, 0.17];

  income = income - allowances;

  if (0 < income && income <= 40000) {
    tax = income * taxRate[0];
  } else if (40000 < income && income <= 80000) {
    tax = 40000 * taxRate[0] + (income - 40000) * taxRate[1];
  } else if (80000 < income && income <= 120000) {
    tax = 40000 * taxRate[0] + 40000 * taxRate[1] + (income - 80000) * taxRate[2];
  } else if (120000 < income) {
    tax = 40000 * taxRate[0] + 40000 * taxRate[1] + 40000 * taxRate[2] + (income - 120000) * taxRate[3];
  } else {
    console.log("Invalid input")
  }

  return tax;
}

```



## Organizing functions
<aside class="notes"></aside>

**When do we need functions?**

1. The piece of code could be well defined by the function name.
1. The piece of code is used more than 1 time in your program.
1. You code looks like spaghetti. (LOOOOOOOOOOOOOOOOOOOONG)



## Functions
<aside class="notes"></aside>

**Resources** 

* [Beginner Programmers Blog](http://danshipper.com/i-am-a-terrible-programmer)
* [How Learning to Program Change the Way I Think](http://djchung.tumblr.com/post/39880299461/how-programming-changed-the-way-i-think)
* [How I Read Programming Books](http://www.simplyahmazing.com/2013/01/how-i-read-programming-books.html)
* [10 Ways To Improve Your Programming Skills](http://www.antoarts.com/10-ways-to-improve-your-programming-skills/?utm_source=dlvr.it&utm_medium=tumblr&utm_campaign=kodefuguru)



## Functions
<aside class="notes">Kit (30 + 15 Min)</aside>

**In Class Lab** : Exercise Return Functions

**In Class Lab** : ATM Functions



## Javascript Object
<aside class="notes">Mart (?? Min)</aside>

### The Greatest Container of them All

* Object Oriented Programming VS Procedural Programming
* An object stores its own values (states)
* An object can also has behaviours (method/function)


## Javascript Object
<aside class="notes"></aside>

**Definition of Object**

* An `object` in CompSci is a collection of data and functions that work with that data.
* Objects allow us to organize similar data effectively.



## Javascript Object
<aside class="notes"></aside>

**Example of an object**

* Person
  * Has a name, age, location
  * Can speak, eat
* Lightbulb
  * Number of watts, brand
  * Can turn on and off



## Javascript Object
<aside class="notes"></aside>

**Syntax**

Empty object = {}

```
var obj = {};
```

Person Object

```
var person = {
  age: 28,
  name: "Mart van de Ven"
};
```



## Javascript Object
<aside class="notes"></aside>

**Key-Value pairs**

```
var person = {
  age: 28,
  name: "Mart van de Ven",
  key1: value1,
  key2: value2,
  ...
  keyX: valueX // No comma for the last pair
};
```

* Objects start and end with { } brackets
* The key is a unique name similar to a variable name.
* The value can be anything! String, number, boolean.. even function or another object!
* The last value should have no comma in the end



## Javascript Object
<aside class="notes"></aside>

**Accessing the object value by index method**

Creating

```
var test = {a: "hi"};
```

Accessing

```
test["a"]; // returns "hi"
```

Assigning

```
test["a"] = "bye"; // test["a"] now stores “bye”
```



## Javascript Object
<aside class="notes"></aside>

**Accessing the object value by dot method**

Creating

```
var test = {a: "hi"};
```

Accessing

```
test.a; // returns “hi”
```

Assigning

```
test.a = "bye"; // test["a"] now stores “bye”
```



## Javascript Object
<aside class="notes"></aside>

**Car example**

```
var car = {
  make: "Ford",
  model: "Focus",
  year: 2013,
  mileage: 89000
}
```



## Javascript Object
<aside class="notes">Mart (25 Min)</aside>

### Properties are variables created inside an object and methods are functions created inside an object.



## Javascript Object
<aside class="notes">Mart (25 Min)</aside>

**In Class Lab** : Code Along Objects



## JSON: Javascript object in string
<aside class="notes"></aside>

* JavaScript Object Notation
* Way of representing objects we create as "Strings"
* Safe way of saving objects, and passing them between places
* Facebook and Twitter use JSON to pass data around
* When you tweet, JSON is sent to the twitter servers



## JSON: Javascript object in string
<aside class="notes"></aside>

**Syntax**

```
// Normal object
{name: "Mart van de Ven"}

// JSON
{"name": "Mart van de Ven"}
```

Wrap the key as string!



## JSON: Javascript object in string
<aside class="notes"></aside>

**Conversion between JSON and Object**

```
// turns objects into JSON strings
JSON.stringify(obj);

// turns JSON strings into objects
JSON.parse(string);
```



## JSON: Javascript object in string
<aside class="notes"></aside>

**Cheatsheet**: JSON Cheat Sheet



## JSON: Javascript object in string
<aside class="notes">Mart (15 Min)</aside>

**In Class Lab** : Exercise JSON



## Homework
<aside class="notes"></aside>

**Homework** : ATM Objects