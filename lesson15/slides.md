![General Assembly](assets/images/ga.png)
# FEWD LESSON 15

## The DOM and Selectors

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Review 
* The DOM and Selectors
* Intro to jQuery



## Review
<aside class="notes">Kit (20 Min)
Homework or any other concept for reviews
</aside>

**Review**



## The DOM and Selectors
<aside class="notes">Mart</aside>

**Document Object Model**

* The structure of HTML documents
* How a document should be accessed and manipulated (by JavaScript)



## The DOM and Selectors
<aside class="notes"></aside>

![Document Object Model](assets/images/dom.png)



## The DOM and Selectors
<aside class="notes"></aside>

**HTML vs DOM**

* The browser is showing you the HTML + CSS that is stored in the DOM.
* If we change things in the DOM, that changes are shown to us instantly!
* Things like
  * add/update/delete elements
  * add/update/delete attributes
  * add/update/delete styles



## The DOM and Selectors
<aside class="notes">Mart (30 Min)
This lab is a visual of what is the DOM and how it can be manipulated real time.
It is used to help visual learners understand the theory.

Using the deck - and examples drawn on the white board - explain how HTML documents are represented in the browser: as a DOM (Document Object Model). Be sure to explain the HTML and CSS that students write is translated and stored in the browser as a DOM. Using javascript, we can manipulate the DOM. Demonstrate how changing anything in the DOM reflects near-instantly in the browser. 

One of the best ways to do this is to open up websites and manipulate them using Developer Tools. For example:
1. Open up the site you chose to use
2. Open up the Developer Tools
3. Explain that the HTML seen in the Elements view is actually just a nice representation of the DOM.
4. Delete a node; the Logo is a good place to start
5. Points out that it has disappeared.
</aside>

**In Class Lab** : What is the DOM



## The DOM and Selectors
<aside class="notes">Mart (20 Min)
Students work in groups to map out the DOM tree of a web site using the console.

suggested website:
1. http://www.foodsense.is
2. http://www.cnn.com

To aide students in understanding the tree-like structure of the DOM, have the students draw a basic tree of the site of your choice.
Be sure the add context attributes like ids, classes, and roles. Draw a final one on the white board with the whole class giving input.
</aside>

**In Class Lab** : Map out The DOM



## Intro to jQuery
<aside class="notes">Kit</aside>

**Review**

* A JavaScript library that makes DOM manipulation simple
* Cross browser - works the same in all browsers
* jQuery allows:
  * document traversal
  * css manipulation
  * event handling
  * animation
  * and more!



## Intro to jQuery
<aside class="notes"></aside>

**jQuery fundamentals**

* $ function
* Finding elements on a page, use selectors with the $ function:

```
$("#searchBox"); // Select by id
$(".errors");    // Select by class
$("body");       // Select by tag name
```

* Returns an array of HTML elements you have selected



## Intro to jQuery
<aside class="notes"></aside>

**Editing HTML**

* .html(htmlString)
  * Insert (and overwrite!) the html inside the selected elements with the htmlString
* .html()
  * With no argument, it’s returns the html inside the matched element
* .text()
  * Can be used in both XML and HTML documents. The result of the .text() method is a string containing the combined text of all matched elements
* .append()
  * Insert content, specified by the parameter, to the end of each element in the set of matched elements



## Intro to jQuery
<aside class="notes"></aside>

**Editing Style**

* .css(propertyName, rule)
  * Changes the inline CSS values for all matched elements
* .css({prop1: val1, prop2: val2})
  * One argument: an object
  * Edit multiple properties at once
* css(propertyName)
  * Similar to .html(), when second arguments is not given, it returns the current value of the css property in question




## The DOM and Selectors
<aside class="notes">Mart (30 Min)</aside>

**In Class Lab** : Code Along DOM Selectors




## Intro to jQuery
<aside class="notes">Kit (30 Min)</aside>

**In Class Lab** : jQuery DOM Manipulation



## Intro to jQuery
<aside class="notes">Kit (?? Min)</aside>

**In Class Lab** : DOM Insertion

* [Reference](http://api.jquery.com/category/manipulation/)
* Q1: before()
* Q2: after()
* Q3: wrap()
* Q4: append()
* Q5: prepend()



## Intro to jQuery
<aside class="notes">Kit (45 Min)</aside>

**In Class Lab** : Changing Cookie Monster

1. Create the js folder and include jQuery on google cdn
1. Apply your favourite background color on `h2` by calling `.css()`
1. Use the following jQuery functions to modify the HTML DOM
  * `before()`, `after()`, `wrap()`, `append()`, `prepend()`
1. Add `#container.colored-container { background-color: <color>; }` to style.css
1. Add the following line at the end of your .js file inside document ready
```
  id = setInterval("$('#container').toggleClass('colored-container')", 1000);
```



## Homework
<aside class="notes"></aside>

**Homework** : Account Info in The Browser