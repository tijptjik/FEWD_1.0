![General Assembly](assets/images/ga.png)
# FEWD LESSON 16

## jQuery

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Review
* More on selectors
* DOM insertion
* Attribute manipulation
* Hide and show
* Practice!
* Create a simple slideshow!



## Review
<aside class="notes">Kit (10 Min)
Homework or any other concept for reviews
</aside>

**Review**



## More on selectors
<aside class="notes">Kit (40 Min)</aside>

```
<body>
  <header>
    <h1>How do I select this tag?</h1>
  </header>
  <h1>And not this one?</h1>
</body>
```

* How to select the tag in header?
* It is just the similar you what you select in CSS.



## More on selectors
<aside class="notes"></aside>

```
<body>
  <div id="main">
    <p>How about this one?</p> 
  </div>
  <p>And not this one?</p>
  <p>Don't select me!</p>
</body>
```

* How to select the last p tag?



## More on selectors
<aside class="notes"></aside>

**Select specific child**

* CSS3
  * :first-child
  * :nth-child(n)
  * :last-child
  * :nth-last-child(n)
  * :nth-child(odd)
  * :nth-child(even)
  * :nth-child(2n+1)



## More on selectors
<aside class="notes"></aside>

**Select specific child**

* CSS3
  * :first-of-type
  * :nth-of-type(n)
  * :last-of-type
  * :nth-last-of-type(n)

[The Difference Between :nth-child and :nth-of-type](http://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/)



## More on selectors
<aside class="notes"></aside>

**Select specific child**

* jQuery
  * :first
  * :last
  * :nth-child(n)
  * :nth-child(odd)
  * :nth-child(even)
  * :eq(index) // start from 0



## More on selectors
<aside class="notes"></aside>

**NOT THE END!**

* X + Y
* X > Y
* X ~ Y
* ...
* [The 30 CSS Selectors you Must Memorize](http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/)



## DOM insertion
<aside class="notes">Mart (30 Min)</aside>

* .text()
  * get or set the text in the set of elements.
* .html()
  * get or set the html in the set of elements
* .append()
  * Insert content at the end of each matched element.



## DOM insertion
<aside class="notes"></aside>

* prepend(<html markup>)
  * Insert content to the beginning of each matched element
* .before(<html markup>)
  * Insert content before all matched elements
* .after(<html markup>)
  * Insert content after all matched elements
* .wrap(<html markup>)
  * Wrap all matched elements with content



## DOM insertion
<aside class="notes"></aside>

**Example on .wrap()**

```
<a href="http://www.google.com">Google</a>
```

```
$("a").wrap('<div class="link">');
```

    <div class="link">
      <a href="http://www.google.com">Google</a>
    </div>



## Attribute manipulation
<aside class="notes">Mart (30 Min)</aside>

```
<img src="xxx" width="xxx" height="xxx" alt="xxx">
```

* attr(attributeName)
  * Retrieves the attribute value of the first matched element

* .attr(attributeName, newValue)
  * Changes the value of attributeName to newValue



## Attribute manipulation
<aside class="notes"></aside>

**Example - GET attribute value**

```
<a href="http://www.google.com">Google</a>
<img id="logo" src="smiley.jpg" />
```

```  
$("a").attr("href"); //Returns "google.com"
$("#logo").attr("src"); // Returns "smiley.jpg"
```



## Attribute manipulation
<aside class="notes"></aside>

**Example - SET attribute value**

```
<a href="http://www.google.com">Google</a>
```

```  
$("a").attr("href", "mysite.com");
// the html will be changed to: 
// <a href="mysite.com">Google</a>
```



## Attribute manipulation
<aside class="notes"></aside>

**Attribute manipulation for style**

* .addClass(className)
  * Add a class onto all matched elements
* .removeClass(className)
  * Remove a class from all matched elements
* .toggleClass(className)
  * If the class isn’t on the elements, add it. If it exists, remove it.
* .hasClass(className)
  * Checks if the matched element already has the className applied to it. Return a boolean value.



## Attribute manipulation
<aside class="notes"></aside>

**Attribute manipulation for info**

* .val()
  * Returns the value of the "value" attribute. Useful when dealing with forms.
* .val(valueToSet)
  * Set the value of the "value" attribute



## Attribute manipulation
<aside class="notes"></aside>

**Example**

```
<input name="instructor" type= "text" value= "Kit" />
```

```
$('[name="instructor"]').val();
// Returns Kit

$('[name="instructor"]').val('Mart');
// Sets the value attribute to "Mart"
```



## Attribute manipulation
<aside class="notes"></aside>

**In Class Lab** : Exercise Attr manipulation



## Hide and show
<aside class="notes">Kit (20 Min)</aside>

**Hide and show HTML element by toggling _display_**

* .hide()
  * Hides all matched elements by setting their inline style to display: none;
* .show()
  * Reveals all matched elements by setting their inline style to display: block. If the element was originally inline, than display: inline will be used.
* .hide(`slow` / `fast` / `<time in ms>`)
* .show(`slow` / `fast` / `<time in ms>`)



## Hide and show
<aside class="notes"></aside>

**Example**

    <h1>This should disappear slowly</h1>

```
$('h1').hide('slow');
```



## Hide and show
<aside class="notes"></aside>

* .remove()
  * Removes the entire elements from the DOM.



## Practice
<aside class="notes">Both (50 Min)</aside>

**In Class Lab**

* Code Along Hide / show exercises
* Exercise My_jQuery
* Exercise Grocery List



## Create a simple slideshow!
<aside class="notes">Both (50 Min)</aside>

[jQuery Cycle Plugin](http://jquery.malsup.com/cycle/)