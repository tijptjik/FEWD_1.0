![General Assembly](assets/images/ga.png)
# FEWD LESSON 6

## Navigation & Sprites

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* HTML Table
* The display property in CSS
* Navigation
* Navigation Image
* Sprites
* Explain HW and Final Project
* Github Intro



## HTML Table
<aside class="notes">Mart (10 Min)</aside>

```
<table>
  <caption>My table caption</caption>
  <thead>
    <tr>                <!-- ROW LEVEL -->
      <th></th>         <!-- CELL LEVEL -->
      <th>Column 1</th> <!-- CELL LEVEL -->
      <th>Column 2</th> <!-- CELL LEVEL -->
      <th>Column 3</th> <!-- CELL LEVEL -->
    </tr>
  </thead>
  <tbody>
    <tr>                <!-- ROW LEVEL -->
      <th>Row 1</th>    <!-- CELL LEVEL -->
      <td>11</td>       <!-- CELL LEVEL -->
      <td>12</td>       <!-- CELL LEVEL -->
      <td>13</td>       <!-- CELL LEVEL -->
    </tr>
  </tbody>
</table>
```
[Detailed Reference](http://www.pdprogrammeur.com/tables-and-html5-table/)



## CSS Table Styles
<aside class="notes">Mart (10 Min)</aside>

```
// cellpadding
th, td { padding: 5px; }

// cellspacing
table { border-collapse:separate; border-spacing: 5px; } // cellspacing="5"
table { border-collapse:collapse; border-spacing: 0; }   // cellspacing="0"

// valign
th, td { vertical-align: top; }

// align (center)
table { margin: 0 auto; }
```



## Border-Collapse
<aside class="notes">Mart (10 Min)</aside>

Collapse & Seperate

```
table {
  border-collapse: separate; /* Or do nothing, this is default */
  border-spacing: 3px; /* Only works if border-collapse is separate */
}


table {
  border-collapse: collapse;
}
```
[ref](http://www.css3.com/css-border-collapse/)



## The display property in CSS
<aside class="notes">Kit (10 Min)</aside>

### Block-level elements

* If no width is set, will expand naturally to fill its parent container.
* Can have margins and/or padding.
* If no height is set, will expand naturally to fit its child elements. (assuming they are not floated or positioned)
* By default, will be placed below previous elements in the markup. (assuming no floats or positioning on surrounding elements)
* It’s not necessary to give it a set width or to give it a width of 100% if you want it to fill its parent horizontally. In fact, doing either of those things may cause maintainability issues or other undesirable problems.
* `<p>`, `<div>`, `<form>`, `<header>`, `<nav>`, `<ul>`, `<li>`, and `<h1>`



## The display property in CSS
<aside class="notes">Kit (10 Min)</aside>

### Inline-level elements

* Will not clear previous content to drop to the next line like block elements.
* Ignore top and bottom margin settings but apply left right margins and all paddings.
* Ignore the width and height properties.
* `<a>`, `<span>`, `<em>`, and `<code>`.



## Navigation
<aside class="notes">Mart (30 Min)</aside>

* Develop the HTML structure using the following elements: `<nav><ul><li><a>`
* The `<li>` element should be set to float:left
* The `<a>` element should be set to display:block



## Navigation Image
<aside class="notes">Mart (25 Min)</aside>

Implement a navigation bar with images



## Sprites
<aside class="notes">Kit (70 Min)</aside>

* A Sprite is a collection of images put into one single image
* Reduce the web server loading by reducing the number of requests for image files
* Save time as no slicing and saving multiple images are required.



## Explain HW and Final Project
<aside class="notes">Mart (10 Min)</aside>

* Implement *Blue Nav*
* Submitted on or before Saturday
* Milestone 1 : Wireframing your project
* Send it in for early review, or bring to class on Monday.

**Final project requirements**



## Intro to Git & Github
<aside class="notes">Mart (Remaining Time)</aside>

* [Why Git?](https://generalassemb.ly/blog/technically-speaking-github)
* [Git + GitHub Video Tutorial](http://net.tutsplus.com/tutorials/tools-and-tips/terminal-git-and-github-for-the-rest-of-us-screencast/)
* [Interactive Tutorial](http://try.github.io/)
* GUI version for [Win](http://windows.github.com/) & [OSX](http://mac.github.com/)
* `OSX`: [GUI guide](http://www.hacheka.com/newbie-guide-for-using-github-in-mac-osx/) or [Command Line](http://blog.mugunthkumar.com/articles/tutorial-setting-up-git-on-your-mac/)
* `Win`: [GUI guide](http://arstechnica.com/information-technology/2012/05/hands-on-github-for-windows-takes-the-pain-out-of-using-git/) or [Command Line](http://guides.beanstalkapp.com/version-control/git-on-windows.html)



## Resources
* [Can I Use?](http://caniuse.com)
* [ColourLovers](http://www.colourlovers.com/)
* [Adobe Kuler](https://kuler.adobe.com/#themes/rating?time=30)
* [Colour Rotate](http://mobile.colorotate.org/)
* [CSS Sprite Generator](http://spritegen.website-performance.org/)
* [Sprite Factor(Advanced [Ruby])](https://github.com/jakesgordon/sprite-factory)
