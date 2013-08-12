![General Assembly](assets/images/ga.png)
# FEWD LESSON 9

## Responsive Design

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* Homework Review
* Intro to Mobile Web Development
* Using Media Queries
* Final project planning



## Homework Review
<aside class="notes">Kit (15 Min)</aside>

**Busy Hands Review**



## Intro to Mobile Web Development
<aside class="notes">Kit (5 Min)</aside>

* What is mobile web development?
  * Make your website mobile and tablet friendly
* Two main challenges on mobile web
  * Screen size varies and usually small
  * Screen resolution



## Intro to Mobile Web Development
<aside class="notes">Kit (5 Min)</aside>

* Responsive Design VS Adaptive Design (What’s the difference between adaptive and responsive web design?)
* Responsive Design: fluid layout and varies with view port size
* Adaptive Design: Identify the device and then delivery the best version of the site



## Intro to Mobile Web Development
<aside class="notes">Kit (10 Min)</aside>

* What is your favorite responsive web site?
  * [http://diehlgroup.com/](http://diehlgroup.com/)
  * [http://foodsense.is/](http://foodsense.is/)
  * [http://www.williamcsete.com/](http://www.williamcsete.com/)
  * [http://owltastic.com/](http://owltastic.com/)
  * More examples
    * [10 Incredible Examples of Responsive Web Design](http://www.webdesigndev.com/web-development/10-incredible-examples-of-responsive-web-design)
    * [29 new inspiring responsive designs on the web](http://thenextweb.com/dd/2013/01/13/30-new-inspiring-responsive-design-websites/)



## Intro to Mobile Web Development
<aside class="notes">Kit (20 Min)</aside>

* What tools/languages are involved in creating a mobile site?
  * Starts with framework
    * [320 and Up](https://github.com/malarkey/320andup/)
  * Chrome user agent
  * Web inspector
  * Media Query
* Responsive adventure
  * [The Next Web](http://thenextweb.com/)



## Using Media Queries
<aside class="notes">Mart (30 Min)</aside>

```bash
media_query_list: <media_query> [, <media_query> ]*
media_query: [[only | not]? <media_type> [ and <expression> ]*]
  | <expression> [ and <expression> ]*
expression: ( <media_feature> [: <value>]? )
media_type: all | aural | braille | handheld | print |
  projection | screen | tty | tv | embossed
media_feature: width | min-width | max-width
  | height | min-height | max-height
  | device-width | min-device-width | max-device-width
  | device-height | min-device-height | max-device-height
  | aspect-ratio | min-aspect-ratio | max-aspect-ratio
  | device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
  | color | min-color | max-color
  | color-index | min-color-index | max-color-index
  | monochrome | min-monochrome | max-monochrome
  | resolution | min-resolution | max-resolution
  | scan | grid
```



## A pixel is not a pixel

In webkit you may target pixel _density_ with `-webkit-device-pixel-ratio`

```bash
<link rel="stylesheet" media="screen and (-webkit-device-pixel-ratio: 0.75)" href="ldpi.css" />
<link rel="stylesheet" media="screen and (-webkit-device-pixel-ratio: 1.0)" href="mdpi.css" />
<link rel="stylesheet" media="screen and (-webkit-device-pixel-ratio: 1.5)" href="hdpi.css" />
<link rel="stylesheet" media="screen and (-webkit-device-pixel-ratio: 2.0)" href="retina.css" />
```



## In Class Lab: Exercise Media Queries
<aside class="notes">Both (45 Min)</aside>

**Coding time**



## In Class Development Time HTML/CSS Final Project
<aside class="notes">Both (Remaining Time)</aside>

**Work on your final project... **

**... ask us anything!!**



## Additional Resources
<aside class="notes">Both</aside>
  
* [More About Media Queries](http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)
* [What The Heck is Responsive Web Design](http://johnpolacek.github.com/scrolldeck.js/decks/responsive/)
* [Responsive Design Patterns from RGA](http://bradfrost.github.com/this-is-responsive/resources.html)
* [Modernizer: Feature Detection](http://modernizr.com/)
* [Polyfills: Backport HTML5 & CSS3 Features](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
* [YepNope: Selective Loading JS](http://yepnopejs.com/)