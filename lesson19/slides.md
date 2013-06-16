![General Assembly](assets/images/ga.png)
# FEWD LESSON 19

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Scalable and Modular Architecture for CSS
* By request: `data-` and `void(0)`
* Object Oriented Javascript
* Facebook Integration : Authentication
* Facebook Integration : API Calls



## Scalable and Modular Architecture for CSS
<aside class="notes">Mart - 15 Min</aside>

**CSS is simple... It’s simple to understand. But CSS is not simple to use or maintain.**

- Repetition
- Unmanagaeble
- Weight war
- Coupling

SMACSS is more style guide than rigid framework - an attempt to document a consistent approach to site development when using CSS.



## SMACSS
<aside class="notes"></aside>

The basic concept of SMACSS is to categorize styles into 5 categories: 

- base, 
- layout, 
- modules,
- states, and
- themes.

Each category comes with a set of more ore less loosely defined naming conventions and usage rules.



## SMACSS : Base
<aside class="notes"></aside>

### Base rules are the defaults.

They are almost exclusively single element selectors.



## SMACSS : Layout
<aside class="notes"></aside>

### Layout rules divide the page into sections. 

Layouts hold one or more modules together. 

All selectors in this category should be prefixed with .layout- (e.g. .layout-header, .layout-sidebar).



## SMACSS : Modules
<aside class="notes"></aside>

### Modules are the reusable, modular parts of our design. 

They are the callouts, the sidebar sections, the product lists and so on.



## SMACSS : States
<aside class="notes"></aside>

### State rules are ways to describe how our modules or layouts will look when in a particular state.

Is it hidden or expanded?



## SMACSS : Themes
<aside class="notes"></aside>

### Theme rules describe how the layout or modules might look.



## SMACSS : Avoid IDs
<aside class="notes"></aside>

### Use classes rather than IDs for styling purposes. 

Classes are more flexible. Using classes can reduce specificity issues.



## SMACSS : Pattern
<aside class="notes"></aside>

### Class names should follow understandable patterns.



## SMACSS : Prefixes
<aside class="notes"></aside>

### Use “pseudo-namespaces” as prefixes

So that modules, modifiers and sub-modules can be identified.



## SMACSS with SASS
<aside class="notes"></aside>

Extending modules with sub-modules made easy.
```
.dialog
  width: 300px
  color: blue

.dialog-wide
  @extend .dialog
  width: 600px
```



## When to use data-
<aside class="notes">Kit - 3 Min</aside>

" Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements. "
~ W3C Specification

- To store the initial height or opacity of an element which might be required in later JavaScript animation calculations
- To store custom web analytics tagging data
- To store data about the health, ammo, or lives of an element in a JavaScript game
- [Custom Attributes in HTML 5](http://www.javascriptkit.com/dhtmltutors/customattributes.shtml)



## Why use data-
<aside class="notes">Kit</aside>

DON'T
```
<div id="mydiv" brand="toyota" model="prius">
  John is very happy with his Toyota Prius, because he saves on gas.
</div>
```

DO
```
<div id="mydiv" data-brand="toyota" data-model="prius">
  John is very happy with his Toyota Prius, because he saves on gas.
</div>
```



## Why use data-
<aside class="notes">Kit</aside>

- The data-* can be validated in HTML5
- You can make use of the .dataset to retreive the data other than getAttribute()

```
var mydiv=document.getElementById('mydiv')

//Using DOM's getAttribute() property (not limited to data-*)
var brand=mydiv.getAttribute("data-brand") //returns "toyota"
mydiv.setAttribute("data-brand", "mazda") //changes "data-brand" to "mazda"
mydiv.removeAttribute("data-brand") //removes "data-brand" attribute entirely

//Using JavaScript's dataset property (only for data-*)
var brand=mydiv.dataset.brand //returns "toyota"
mydiv.dataset.brand='mazda' //changes "data-brand" to "mazda"
mydiv.dataset.brand=null //removes "data-brand" attribute
```



## Quick explanation of javascript: void(0)
<aside class="notes">Kit - 3 Min</aside>

Normally, when you click a link, the browser loads a new page (or refreshes the same page).

void is a reserved Javascript keyword. It evaluates the expression and always returns undefined.

```
<a href="javascript:void(0);">Click here to do nothing</a>
<a href="javascript:void(document.body.style.backgroundColor='green');">Click here for green background</a>
```



## Quick explanation of javascript: void(0)
<aside class="notes">Kit</aside>

Another reason to use void(0) is that the undefined is a global variable but not a reserved keyword

```
alert(undefined); //alerts "undefined"
var undefined = "hello";
alert(undefined); //alerts "hello"

alert(void(0)); // always return a real undefined
```



## Object Oriented Javascript
<aside class="notes">Mart - 20 Min</aside>



## Facebook Integration : Authentication
<aside class="notes">Kit - 40 Min</aside>

* [Getting Started with Facebook Login for Web](https://developers.facebook.com/docs/facebook-login/getting-started-web/)
* [FB.getLoginStatus](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus/)
* [Uncaught ReferenceError: FB is not defined when using FB.getLoginStatus](http://stackoverflow.com/questions/15143671/uncaught-referenceerror-fb-is-not-defined-when-using-fb-getloginstatus) 



## Facebook Integration : API Calls
<aside class="notes">Mart - 40 Min</aside>



## Facebook Integration : API Calls
<aside class="notes">Mart - 40 Min</aside>



## Final Projects, Final Chance
<aside class="notes">Mart - 40 Min</aside>

**Let's squash some bugs!**