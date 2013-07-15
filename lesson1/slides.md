![General Assembly](assets/images/ga.png)
# FEWD LESSON 1

## Overview and HTML

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* Round of Introductions
* Course Information
* What is Web Development?
* How the Internet Works?
* HTML Basics
* HTML Tags
* Website File Structure
* Coding time!



## Who we are
<aside class="notes">Kit ~ 3 Min</aside>

Kit Yuen

* Founder of QPon
* Freelancer
* Best practice engineer
* Traveler



## Who we are
<aside class="notes">Mart ~ 3 Min</aside>

Mart van de Ven

* Analytical Engineer, DemystData
* MSc Information Design
* G.U.I.D.E.
* Coding as Prism
* Open Source & Open Data



## ... and who do we have here?
<aside class="notes">Class ~ 4 Min</aside>

* Tell us a bit about yourselves
* What are you hoping to achieve
* Already have any plans for your project?
* Fill out the [GA Student Profile](https://generalassembly.wufoo.com/forms/k4k4r7/)!



## Course Information
<aside class="notes">Kit ~ 3 Min</aside>

* Class Structure
* Final Project
* Grading Policy



## Course Flow
<aside class="notes">Mart ~ 3 Min</aside>

* Visit [htijptjik.github.io/FEWD/slides/?lesson=1](http://tijptjik.github.io/FEWD/slides/?lesson=1) for the slides
* Visit [github.com/tijptjik/FEWD/](https://github.com/tijptjik/FEWD/blob/gh-pages/lesson1/slides.md) for the notes
* Or check the slides markdown file in your local FEWD repository.  
* Ask questions via Schoology, E-mail, or Github Issues.
* Setup Google+ to receive e-mail notifications if you haven't already



## What is Web Development?
<aside class="notes">Kit ~ 12 Min</aside>

![fullscreen](http://ankitsahay.com/wp-content/uploads/2013/06/The.Matrix.glmatrix.31.png)
![Web Developer](../assets/images/web-developer.jpg)



## What is Web Development?
<aside class="notes"></aside>

Website

* Single page of plain text
* http://www.columbia.edu/~fdc/sample.html
* Text-based browser - lynx
* Rich user interface browsers - chrome, firefox



## What is Web Development?
<aside class="notes"></aside>

Web applications

* Online shop
* http://www.amazon.com 
* Social networks
* http://www.facebook.com



## What is Web Development?
<aside class="notes"></aside>

For a static website, web development can simply refer to:

* Writing markup: HTML
* Writing style: CSS
* Coding: Javascript

![HTML is the building block of a website](../assets/images/web_blocks.gif)



## What is Web Development?
<aside class="notes"></aside>

But for large web applications, it could involve hundreds of people working on different aspects including:

* Web design: Graphical designer
* GUI design (Graphical User Interface): UX designer
* Front End Web Development (Client side): Javascript developer, Flash developer
* Back End Web Development (Server side): PHP, Ruby, Python developer
* Database: Database engineer, Database administrator
* Code optimization: SEO engineer
* Testing: Test developer, QA
* Application deployment: Best practice engineer
* Web server setup & Security: Server administrator, Best practice engineer



## What is Web Development?
<aside class="notes">Mart ~ 3 Min</aside>

Developer Tools

* Text Editor / Integrated Development Environment
* Automated Test Suits
* Deployment Tools

Project Management Tools

* Project management tool
* Bug tracker
* Version control



## Text Editor
<aside class="notes">Mart ~ 10 Min</aside>
[SublimeText2](http://www.sublimetext.com/2)

* [Package Control](http://wbond.net/sublime_packages/package_control/installation)
* Create a project
* introduce yourself to `p`.
* Try to make a good first impression.
* You will love `p`.
* [Hacks](http://hexlator.blogspot.hk/2013/05/best-sublime-text-2-tips-tricks-hacks.html), [Tips](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/) & [Tricks](http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/)




## Version Control
<aside class="notes">Mart ~ 30 Min</aside>
![fullscreen](http://www.cameronmcefee.com/wp-content/uploads/2011/03/nasa.jpg)
### [Git](https://help.github.com/articles/set-up-git)
For [Mac](http://mac.github.com/) and [Windows](http://windows.github.com/)

* Sign-up with [GitHub](https://github.com/signup/free)
* `fork` the [FEWD repository](https://github.com/tijptjik/FEWD)
* [Clone](http://support.fastpdfkit.com/kb/how-to/how-to-clone-from-github) your GitHub copy to your local machine
* [Pave the way](https://help.github.com/articles/making-changes) for your final project
* Serve your website with [GitHub Pages](https://help.github.com/articles/creating-project-pages-manually)
* [Marvel](https://github.com/) at your mastery over Git
* ... the most complicated tool built by mankind



## HOW THE WEB WORKS
<aside class="notes">Kit ~ 3 Min</aside>

<table>
  <tr>
    <td style="vertical-align: middle;">
      How does my code get to a users browser:
      <ul>
        <li>DNS Servers</li>
        <li>Web Servers</li>
        <li>Web Browsers</li>
        <li>CDN (Content Distribution Network)</li>
      </ul>
    </td>
    <td><img src="../assets/images/global-internet-map.png"></td>
  </tr>
</table>



## HTML Basics
<aside class="notes">Mart ~ 4 Min</aside>

* HTML: HyperText Markup Language
* The main markup language for creating web pages
* Manipulate text and image as the building blocks of websites



## HTML Basics
<aside class="notes"></aside>

* HTML5 is the fifth version of HTML standard
* More HTML elements are available
  * `<audio>`
  * `<video>`
  * `<canvas>`
* Other features
  * Drag and drop API
  * File API
  * Geolocation API
  * WebSocket API



## HTML Basics
<aside class="notes">Kit ~ 15 Min</aside>

* Doctype also stands for Document Type Declaration (DTD) 
* Prior to HTML5, HTML is based on another markup language called SGML
  * SGML: Standard Generalized Markup Language 
* <!DOCTYPE> is not an HTML tag, it tells the browser the version of the HTML page
  * HTML 4.01 Strict
    * <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http:// www.w3.org/TR/html4/strict.dtd"> 
  * HTML 4.01 Transitional
    * <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
* HTML5 is not based on SGML
  * <!DOCTYPE html>



## HTML Basics
<aside class="notes"></aside>

* Basic Document Structure

```
<!DOCTYPE html>
<html>
  <head>
    Document metadata
  </head>
  <body>
    Document contents
  </body>
</html>
```



## HTML Basics
<aside class="notes"></aside>

Syntax

![HTML Tag Syntax](../assets/images/syntax-1.png)



## HTML Tags
<aside class="notes"></aside>

Syntax

![HTML Tag Syntax](../assets/images/syntax-2.png)



## HTML Tags
<aside class="notes"></aside>

Text Elements

```
<p>This is a paragraph</p>
<br> (line break)
<hr> (horizontal rule)
<pre>This text is reformatted</pre>
```



## HTML Tags
<aside class="notes"></aside>

Heading Elements

```
<h1>Largest Heading</h1>
<h2> . . . </h2>
<h3> . . . </h3>
<h4> . . . </h4>
<h5> . . . </h5>
<h6>Smallest Heading</h6>
```



## HTML Tags
<aside class="notes"></aside>

Ordered list

```
<ol>
  <li>First item</li>
  <li>Next item</li>
</ol>
```



## HTML Tags
<aside class="notes"></aside>

Unordered list

```
<ul>
  <li>First item</li>
  <li>Next item</li>
</ul>
```



## HTML Tags
<aside class="notes"></aside>

Text Elements

```
<em>This text is emphasized</em>
<strong>This text is strong</strong>
<code>This is some computer code</code>
```



## HTML Tags
<aside class="notes"></aside>

Definition list

```
<dl>
  <dt>First term</dt>
  <dd>Definition</dd>
  <dt>Next term</dt>
  <dd>Definition</dd>
</dl>
```



## HTML Tags
<aside class="notes"></aside>

Deprecated Tags (Don't use it)

```
<b>This text is bold</b>
<i>This text is italic</i>
```



## Website File Structure
<aside class="notes">Kit ~ 2 Min</aside>

![File Structure](../assets/images/web-project-file-structure.png)



## Coding time!
<aside class="notes">Both ~ Remainder</aside>

Labs

* intro
* lostCat
* cookieMonster



## Homework
<aside class="notes"></aside>

Personalize the cookie monster project using your own content. 

Experiment with additional HTML elements and CSS properties found on the [handout](https://github.com/generalassembly-studio/FEWD_Curriculum/blob/master/Lessons/01_Intro_To_Web_Dev/css-cheat-sheet-v2.pdf).

Reading:

* [The Evolution of the Web](http://www.evolutionoftheweb.com/?hl=en)
* [HTML | MDN](https://developer.mozilla.org/en-US/docs/HTML)
* [What really happens when you navigate to a URL](http://igoro.com/archive/what-really-happens-when-you-navigate-to-a-url/)
* [Advanced guide to using GIT on OSX](http://shaun.boyblack.co.za/blog/2009/03/14/getting-started-with-git-on-mac-os-x/)
