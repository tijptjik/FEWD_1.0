![General Assembly](assets/images/ga.png)
# FEWD LESSON 8

## Grid Based Design / Typography

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* MailChimp
* PayPal Buy Now Button
* What is a framework?
* Grid-Based Design
* Frameworks
* My First Grid Layout w/ 960-Grid
* Web Typography and @Font-Face typography
* In Class Development Time HTML/CSS Final Project



## [MailChimp](http://mailchimp.com/)
<aside class="notes">Kit (10 Min)</aside>

* Broadcast and promote your website by sending newsletter
* MailChimp is a online newsletter service
* Provide a code snippet for subscription box on your website
* Mailchimp handles the rest
* You can send newsletter and manage the subscription list on mailchimp.com



## PayPal Buy Now Button
<aside class="notes">Kit (10 Min)</aside>

* A Feature of [PayPal Website Payments Standard](http://www.paypal.com)
* Allow visitor to pay online
* Copy the code snippet and paste it on the website to create the button
* PayPal will do the rest for you



## What is a framework?
<aside class="notes">Kit (10 Min)</aside>

* A framework is a environment providing you tools to work
* A Kitchen is a framework for cooking
* In the framework, you also need to follow some rules
* Don't break the rule!



## Grids: Divide & Conquer
<aside class="notes">Mart (10 Min)</aside>

* Aligning makes design look more professional
* To align elements horizontally the whole page as a fixed number of “bars”
* Usually the grid is 960 pixels divided into 12 parts (or units)
* [Modular Grid](http://modulargrid.org/)



## Grids: Terminology
<aside class="notes">Mart (10 Min)</aside>

**Units**: A unit is the smallest vertical division of the page.

<br>

**Columns**: Columns are groups of units, combined together to create workable areas for the presentation of content.

<br>

**Regions**: Regions are groupings of similar columns that form parts of the page. For example, in a four-column grid, the first three columns from the left might make up a single region for the display of one kind of content, and the remaining column might form another region.

<br>

**Fields**: Fields are horizontal divisions of the page that help a designer to visually pace the placement of elements on the Y-axis.



## Grids: Solutions
<aside class="notes">Mart (10 Min)</aside>

* In our exercise we will use [960GS](http://960.gs/)
* For less features but responsiveness use [Skeleton](http://www.getskeleton.com/)
* There are many, many fancier solutions.
* It’s not that complicated, so feel free to check the source!



## Avoid dirty Hacks
<aside class="notes">Mart (10 Min)</aside>

* Most solutions for grids online are made for maximum browser compatibility but the Box Model Hack only works on < IE8
* Thus the solutions have not been designed with the Box Model Hack in mind, and enabling it will blow things up quite bad
* If you really want to use the global Box Model Hack, you can make a custom grid system quite easily: see [this](http://css-tricks.com/dont-overthink-it-grids/) for instance.
* What you can do instead, is to make the Box Model Hack apply only to parts of your code, but not the grid elements.



## CSS Frameworks & Grids
<aside class="notes">Mart (10 Min)</aside>

**CSS Language**

* [960 Grid System](http://960gs.com) **Grid**
* [Skeleton](http://www.getskeleton.com/)
* [BluePrint](http://www.blueprintcss.org/) **Framework**



## LESS Frameworks & Grids
<aside class="notes">Mart (10 Min)</aside>

**[LESS](http://lesscss.org/) Language**

* [Bootstrap](http://twitter.github.io/bootstrap/) **Framework**
* [Less Elements](http://lesselements.com/) **Mixins**
* [LessHat](http://lesshat.com/) **Mixins**
* [ClearLess](http://clearleft.github.io/clearless/) **Mixins**
* [Frameless Grid](http://framelessgrid.com/) **Grid**
* [Golden Grid System](http://goldengridsystem.com/) **Grid**



## SASS Frameworks & Grids
<aside class="notes">Mart (10 Min)</aside>

**[SASS (SCSS)](http://sass-lang.com/) Language**

* [Compass](http://compass-style.org/) **Framework**
* [Gumby](http://gumbyframework.com/) **Framework**
* [Bourbon](http://bourbon.io/) **Mixin**
* [Unsemantic](http://unsemantic.com/) **Grid**
* [Susy](http://susy.oddbird.net/) **Grid**
* [Fancy Buttons](https://github.com/imathis/fancy-buttons) **Buttons**



## Stylus Frameworks & Grids
<aside class="notes">Mart (10 Min)</aside>

**[Stylus](http://learnboost.github.io/stylus/) Language**

* [Nib](http://visionmedia.github.io/nib/) **Mixins**
* [Semantic Grid System](http://semantic.gs/) **Grid**



## My First Grid Layout w/ 960-Grid
<aside class="notes">Mart (20 Min)</aside>



## Web Typography: The Problems
<aside class="notes">Kit (60 - 90 Min)</aside>

* Web browsers were not designed by designers, but engineers
* By default the browsers only use the fonts installed on the user’s computer
* Different computer systems have different fonts installed!
* Web-safe fonts are quite limited for nice designs
* Images for pictures are hard to maintain and the text is not selectable



## Web Typography: The Previous Solutions
<aside class="notes">Kit (60 - 90 Min)</aside>

* __sIFR__: Flash-based rendering
* __Cufon__: JavaScript-based rendering
* __Typeface.js__: JavaScript-based rendering
* [Read more](http://www.solidstategroup.com/what-we-think/a-comparison-between-sifr-cufon-and-font-face)



## Web Typography: Recommended Solution
<aside class="notes">Kit (60 - 90 Min)</aside>

* **@font-face**
* CSS technique that downloads a font file for displaying the font properly
* Easiest way is to go to Google Web Fonts and use the fonts they host
  * [Google Fonts](http://www.google.com/webfonts)
* Other resources
  * [Font-Squirrel](http://www.fontsquirrel.com/)
  * [The League of Moveable Type](http://www.theleagueofmoveabletype.com/)
  * [dafont.com](http://www.dafont.com)



## Web Typography: ... Problems with the recommended solution
<aside class="notes">Kit (60 - 90 Min)</aside>

* Font copyrights (when not using Google Web Fonts or the like)
* Limited support in IE



## In Class Development Time HTML/CSS Final Project
<aside class="notes">Both (Remaining Time)</aside>

**Work on your final project... **

**... ask us anything!!**



## Additional Resources
<aside class="notes">Both</aside>

* [Variable Grid System: a quick way to generate an underlying CSS grid for your site](http://grids.heroku.com)
* [Grid-Based Design: Six Creative Column Techniques](http://www.smashingmagazine.com/2008/03/26/grid-based-design-six-creative-column-techniques/)
* [960 Grid System Made Easy](http://sixrevisions.com/web_design/the-960-grid-system-made-easy/)