![General Assembly](assets/images/ga.png)
# FEWD LESSON 19

## Advanced Topics

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



## Quick explanation of javascript: void(0)
<aside class="notes">Kit - 3 Min</aside>

Normally, when you click a link, the browser loads a new page (or refreshes the same page).

void is a reserved Javascript keyword. It evaluates the expression and always returns undefined.

```
<a href="javascript:void(0);">Click here to do nothing</a>
<a href="javascript:void(document.body.style.backgroundColor='green');">Click here for green background</a>
```

When a browser follows a javascript: URI, it evaluates the code in the URI and then replaces the contents of the page with the returned value, unless the returned value is undefined. The void operator can be used to return undefined. For example:


## Object Oriented Javascript
<aside class="notes">Mart - 20 Min</aside>



## OOJS : Duck Typing
<aside class="notes"></aside>

### "If it looks like a duck and quacks like a duck, it's a duck".

`Duck typing` is a style of dynamic typing in which an object's current set of methods and properties determines the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface.

## OOJS :
<aside class="notes"></aside>



## OOJS :
<aside class="notes"></aside>



## OOJS :
<aside class="notes"></aside>



## Facebook Integration : Authentication
<aside class="notes">Kit - 40 Min</aside>



## Facebook Integration : API Calls
<aside class="notes">Mart - 40 Min</aside>



## Facebook Integration : API Calls
<aside class="notes">Mart - 40 Min</aside>



## Final Projects, Final Chance
<aside class="notes">Mart - 40 Min</aside>

**Let's squash some bugs!**