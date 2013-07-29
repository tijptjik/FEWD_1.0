![General Assembly](assets/images/ga.png)
# FEWD LESSON 5

## Page Layout

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* Homework Feedback
* W3C Markup Validator
* Two More Pseudo Classes
* Float Positioning
* Two Column & Three Column Layout 
* Ecard.ly 



## Homework Feedback
<aside class="notes">Kit (10 Min)</aside>

* Use index.html as the default page
* `body { font-size: 75%; }` = 75% of the browser setting
* Try using unorder list `<ul><li>` to build your navigation menu
* Use CSS `margin` and `padding` to control the spacings between HTML elements.
* How to include a google map?
* Google font
* Apply the base fonts on `<body>` and don't forget to include the fallback fonts
* Try using `<a href="#">link</a>` as a placeholder
* Don't forget the id and class are case-sensitive



## W3C Markup Validator
<aside class="notes">Kit (10 Min)</aside>

* [W3C Validator](http://validator.w3.org/)
* [HTML Tidy](http://www.dirtymarkup.com/)



## Two More Pseudo Classes
<aside class="notes">Kit (5 Min)</aside>

###:before and :after

```
p:before {
	content: "Paragraph:";
	color: red;
	display: block;
}
```



## Float Positioning
<aside class="notes">Mart (45 Min)</aside>

[Codepen](http://codepen.io)

* Float Positioning
* `clear:both`
* `.clearfix`
* Advanced Positioning



## Float Positioning
<aside class="notes"></aside>

### The clearfix hack

```
/* Clear fix hack */
.clearfix:after {
	content: ".";
	display: block;
	clear: both;
	visibility: hidden;
	line-height: 0;
	height: 0;
}
```



## Two Column & Three Column Layout 
<aside class="notes">Kit (20 Min)</aside>

* Create a 2-column layout: *twoColumnLayout*
* Make use of the `.clearfix`
* Create a 3-column layout: *threeColumnLayout*



## Ecard.ly 
<aside class="notes">Both (60 Min)</aside>

* All on the same page?
* Let's get cracking! 



## Homework

Submit ECardly by Saturday evening on GitHub.

* The path should be FEWD/lesson4/labs/ecardly
* Feel free to add questions or notes in the code. 