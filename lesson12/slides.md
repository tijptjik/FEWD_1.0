![General Assembly](assets/images/ga.png)
# FEWD LESSON 12

## Variables, Data Types and Conditional Logic

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Intro to Computational Thinking
* Introducing the Console
* Variables and Data Types
* Conditional Statements



## Intro to Computational Thinking
<aside class="notes">Mart (25 Min)</aside>

**GA wants to give you a robot!**

But first, we need to know that you can think like a computer. 

Write the steps you would provide a robot so that it can check your email inbox. 
Go ahead and give your robot a name.

`<15 mins>`



## Intro to Computational Thinking
<aside class="notes"></aside>

JavaScript (really all programming languages) programs executes:

**linearly** One thing happens after another

**decisions** IF email notification received THEN check email. 

**storage** Archive the email my friend sent.

**iterations** For the next 10 unread messages, delete



## How we will work
<aside class="notes"></aside>

* Using the Web Developer Console to learn the basics
* Cookie monster to set snippets of code against the bigger picture.
* The magic of jQuery brings us back to the browser. It can modify HTML and CSS.
* More on jQuery later.



## Web Developer Console
<aside class="notes">Kit (25 Min)</aside>

* console.log("Message to log");
* prompt('What is your first name?');
* Math
  * Addition: +
  * Subtraction: -
  * Multiplication: *
  * Division: /
  * Increment: ++
  * Decrement: --
  * Modulus: %
* [BODMAS PEMDAS RULE](http://en.wikipedia.org/wiki/Order_of_operations)



## In Class Lab: LineByLine
<aside class="notes">
Open line_by_line.js and follow instructions.
Students view output in the console.
Review answers as a class. There is no answer key.
</aside>

**In Class Lab : Line by Line** 



## What is a variable?
<aside class="notes">Mart (40 Min)</aside>

**Declaration** : var age;

**Assignment** : age = 21;

**Declaration and initialization** : var age = 21;

**Re-assignmen** : var name = "Jo" : name = "Mich";



## Variable conventions
<aside class="notes"></aside>

* Variables start with a lower case letter
* If they contain multiple words, subsequent words start with an upper case letter
  * e.g: var numberOfStudents = 10;



## Data Types: What can variables store?
<aside class="notes"></aside>

* boolean
* number
* string



## Data Types: Boolean
<aside class="notes"></aside>

Binary, two possible values:  

  * true & false

<br>

Has driver license:

  * If driver has license: true
  * If driver does not have license: false



## Data Types: String
<aside class="notes"></aside>

Stores textual information:

**Double quotes** : "How is the weather today?"

**Single Quotes** : 'Warm'



## Data Types: String
<aside class="notes"></aside>

**Double vs single quoted strings:**
  
  * 'They "purchased" it'
  * "It's a beautiful day"

<br>

**Escaping**
  
  * "They \"purchased\" it"
  * 'It\'s a beautiful day'



## Data Types: Numbers
<aside class="notes"></aside>

**Represent numerical data**

  * int:         42
  * float:      3.14159265

<br>

**Signed**

  * int:         +6
  * float:      -8.2

<br>

Can perform arithmetic on number data types



## Data Types: A few basic operations
<aside class="notes"></aside>

**Length of a string:**

  * var name = "Jo";
  * name.length
    * => 2
  * Can be done directly on the string: "Jo".length
    * => 2



## undefined
<aside class="notes"></aside>

* var name = "J";
* name.surname;
* surname property is not on name, therefore it’s undefined



## Debug variables - null
<aside class="notes"></aside>

* var colour = null; // this is null
* var size; // this is undefined



## null vs undefined
<aside class="notes"></aside>

```
var x;               // undefined

x == null            // true
x == undefined       // true
x === null           // false
x === undefined      // true

var y = null;        // null

x == null            // true
x == undefined       // true
x === null           // true
x === undefined      // false
```



## In Class Lab: data_types
<aside class="notes">
* Open exercise.js and follow instructions.
* Students view output in the console.
* Review answers as a class. There is no answer key.
</aside>

**In Class Lab : Data Types**



## Data type conversion
<aside class="notes"></aside>

When / why would you convert a data types?
    
    var intString = "4";
    var intNumber = parseInt(intString);
    var floatString = "3.14159";
    var floatNumber = parseFloat(floatString);

These also work

    parseInt("4");
    parseFloat("3.14159");
    parseInt("3.5");   //gives 3



## Number to String
<aside class="notes"></aside>

    var number = 4;
    number.toString(); => "4"
    //
    // OR
    //
    number + ""; => "4"



## Number to String
<aside class="notes"></aside>

This results in an error:

    4.toString();

This does not:

    (4).toString();

Why? Because it's ambiguous for the parser! 



## String to Number
<aside class="notes"></aside>

    var notANumber = parseInt("NAN");
    var nullThing = null;
    parseFloat(nullThing);



## Conditional Logic: Comparisons
<aside class="notes">Kit (60)</aside>

Why and when we need comparisons

    10 == 10 // true
    10 == 5 // false
    "hi" == "hi" // true



## Conditional Logic: Comparisons
<aside class="notes">Kit (60)</aside>

Sometimes we also need to the type of variables too

    typeof("123")
    typeof(true)
    typeof(3.14)
    typeof(null)



## Conditional Logic: Comparison operators
<aside class="notes"></aside>

![Logical Operators](assets/images/operators.png)



## Conditional Logic: Conditionals
<aside class="notes"></aside>

* What is a Conditional?
* Why would we use it? (Remember your robot example)



## Conditional Logic: Conditionals
<aside class="notes"></aside>

**Logic**

You can come in if: you are a GA students

**Code**
    
    var student = "GA";

    if (student == "GA") {
        console.log("Come on in!");
    }



## Conditional Logic: If
<aside class="notes"></aside>

    if(true) {
        console.log("The condition is true");
    }

    if(false) {
        console.log("You won’t see this");
    }



## Conditional Logic: If Else
<aside class="notes"></aside>

    if(condition is true) {
        console.log("The condition is true");
    } else {
        console.log ("The condition was false")
    }



## Conditional Logic: If Else If
<aside class="notes"></aside>

    var topic = "JS";

    if (topic == "JS") {
        console.log("You're learning JavaScript");
    } else if (topic == "JavaScript") {
        console.log("You're still learning JavaScript");
    } else {
        console.log("You're learning something else");
    }



## Conditional Logic: And &&, Or ||
<aside class="notes"></aside>

    // And
    if (name == "GA" && password == "YellowPencil"){
        console.log ("can access the internet")
    }

    // Or
    if (day == "Monday" || day == "Thursday"){
        console.log ("You have class today")
    }



## In Class Lab: Code Along Conditionals
<aside class="notes">Both (20 Min)
* Open conditionals.html and add the script tags.
* Open conditionals.js and add answer the questions together as a class.
</aside>

**In Class Lab** : Code Along Conditionals



## In Class Lab: Exercise If Else
<aside class="notes">Both (20 Min)
* Open exercise.js and change the "Replace Me" to the correct answer.
* Feedback on can be viewed in the browser.
* Review answers as a class.
</aside>

**In Class Lab** : Exercise If Else



## In Class Lab: Conditional Cookie Monster
<aside class="notes">Both (If still have time)
* Open html file and show students how it works.
* Open app.js file talk/walk through what is happening. Make sure to highlight the topics we saw in class.
</aside>

**In Class Lab** : Conditional Cookie Monster



## Homework
<aside class="notes"></aside>

* HW Favorite
* HW Relational Operators