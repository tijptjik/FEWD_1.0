![General Assembly](assets/images/ga.png)
# FEWD LESSON 3

## Advanced CSS

### Instructors
Kit Yuen & Mart van de Ven 




## Review Celebrity Blog
<aside class="notes">Both (20 Min)</aside>

* What were the problems you ran into?
* Show us what you made! 



##  CSS: Fonts Revisited
<aside class="notes">Kit (15 Min)</aside>

Size unit in HTML [w3schools](http://www.w3schools.com/cssref/css_units.asp)

* px
* em
* rem
* %
* ...
* [FONT SIZING WITH REM (px VS em VS rem)](http://snook.ca/archives/html_and_css/font-size-with-rem)



##  CSS: Fonts Revisited
<aside class="notes">Kit (15 Min)</aside>

* letter-spacing:
  * The spacing behavior between text characters.
* text-align:
  * Text alignment
  * Wrapped by block element
  * left, right, center, justify
* text-decoration:
  * Specifies the formatting of text
  * none, underline, overline, line-through



##  CSS: Fonts Revisited
<aside class="notes">Kit (15 Min)</aside>

* text-transform:
  * Specifies the capitalization of text
  * none, capitalize, uppercase, lowercase
* line-height:
  * Specifies the spacing between lines
  * Can be unitless



##  The Font Sizing Dilemma
<aside class="notes">Kit (15 Min)</aside>

a common practice is to set the body font size at 62.5% and then to use “em” for everything else. The reason for this is that the results are easy to translate: 1.2em = 12px, 1.4em = 14px, 2.4em = 24px, etc.



##  CSS: Pseudo Classes
<aside class="notes">Kit (10 Min)</aside>
States of the HTML element

* a:
* a:link
* a:visited
* a:hover
* a:active



##  Box Model Basics
<aside class="notes">Mart (20 Min)</aside>

![Box Model](http://learn.shayhowe.com/assets/courses/html-css-guide/box-model/box-model.png)

* Content-box vs Border-Box
* Collapsing Margins
* Negative Margins
* [Live Example!](http://codepen.io)



## Set border-box on *
<aside class="notes">Mart (20 Min)</aside>

```CSS
	* {
	  box-sizing:border-box;
	  -moz-box-sizing:border-box;
	  -webkit-box-sizing:border-box
	}
```



##  Web Inspector Hunt!
<aside class="notes">Both (10 min)</aside>
Go : https://coderwall.com/evantravers

* Using the web inspector students will work together to answer each of the following:
* What color are the links on this site?
* What heading tag is being used for the title of each blog post?
* What is the width and height of a particular image?
* How wide is the main "container "div" of the site?



##  IDs & Classes: How to Identify Elements
<aside class="notes">Kit (15 min)</aside>

* id: unique
* [Live Example!](http://codepen.io)



##  Brook & Lyn
<aside class="notes">Both (40 Min)</aside>

* Does everything look alright?
* Let's see what we are trying to build!



##  Continue working on your Celebrity Site!
<aside class="notes">Both (40 Min)</aside>



##  Homework
<aside class="notes"></aside>

* Finish your website
* Have it ready by 23:59 Tuesday for review.



## Resources
<aside class="notes"></aside>

### Foundational
* [The Box Model, Margin and Padding](http://www.codeproject.com/Articles/227840/CSS-Basics-The-Box-Model-Margin-and-Padding)
* [Importance of Pseudo classes order](http://meyerweb.com/eric/css/link-specificity.html)
* [Unitless line-height](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/)
* [30 CSS Best Practices for Beginners](http://net.tutsplus.com/tutorials/html-css-techniques/30-css-best-practices-for-beginners/)

<br>

### Additional
* [3 Must-Learn CSS Techniques for Perfect Web Typography](http://designshack.net/articles/css/3-must-learn-css-techniques-for-perfect-web-typography/)
* [Font Sizing with REM](http://snook.ca/archives/html_and_css/font-size-with-rem)
* [Compose to a Vertical Rhythm](http://24ways.org/2006/compose-to-a-vertical-rhythm/)