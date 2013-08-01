![General Assembly](assets/images/ga.png)
# FEWD LESSON 4

## Page Layout

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* ASCII Characters and Symbols
* Search Engine Optimization
* In Class Lab: Art is hard
* In Class Lab: Ecardly



## ASCII Characters and Symbols

* How to output the &lt;, &gt;, &amp; in HTML?
* [HTML ISO-8859-1 Reference](http://www.w3schools.com/tags/ref_entities.asp)
* [HTML Codes - Characters and symbols](http://www.ascii.cl/htmlcodes.htm)



## Search Engine Optimization

* What is SEO?
* Increase the search ranking
* Best practice



## Use headings

* Use heading tags &lt;h1&gt; (the most important) through &lt;h6&gt; (the least important) to emphasize important text
* When you have for instance a &lt;h1&gt; and &lt;h2&gt; that belong together put them inside of a &lt;hgroup&gt;
* Never put all of the page's text into a heading tag!
* &lt;article&gt; elements on the page can have their own headers



## Make images searchable

* Use brief, but descriptive filenames
* Avoid using generic filenames like "image1.jpg"
* Avoid stuffing lengthy keywords into alt text or filenames
* Always use the alt attribute on the &lt;img&gt; tag



## Meta tags
  
* Meta tags go  in the &lt;head&gt; and have a name and content
* &lt;meta name="description"&gt; is a brief summary of what this page contains; search engines may use this on the search results page
* &lt;meta name=”keywords”&gt; is a comma-separated list of relevant keywords that you want to match your site
* &lt;meta name="author"&gt; is you (or whoever made the site)



## Page titles

* Tells both users and search engines what the topic of the page is
* Use brief, but descriptive titles
* Page title is usually displayed in search results
* Page title is used as the file name when saving the page
* Create unique titles for each page (nothing so annoying than saving many pages as pdfs with having to rename every one)



## Page URLs

* Try to keep the url of your page short and meaningful
* A good example is http://generalassemb.ly/education
* This is sometimes a discussion with back-end engineers
* Apply the following practice for all URLs including the file URLs 
  * lowercase
  * no space
  * use hyphen instead of underscore to separate words



## Use text for navigation menu

* Avoid using images, Flash or JavaScript
* It takes time for them to be fully loaded
* If you have to use images, use it with alt text
* And style the text on top of a css background-image instead of text embedded on image



## In Class Lab: Art is hard

* Improve the code of a website
* Write down what you have done and the reason for doing so


* Hints:
  * index.html - css link problem
  * style.css  - body background image path problem
  * index.html - remove the &lt;center&gt; wrapper
  * index.html - &lt;header&gt; tag is not closed probably
  * index.html - should use &lt;h1&gt; instead of &lt;h3&gt; for the main heading
  * style.css  - the &lt;h3&gt; style should be applied to &lt;h1&gt; instead
  * index.html - src instead of scr in &lt;img&gt; tag
  * index.html - rename the image file to a better filename
  * index.html - add alt text on images
  * index.html - remove the dummy space under the &lt;img&gt;



## In Class Lab: Ecardly

* Before we start
  * Why is there a "Box Model Hack" in our template? 
  * [A Look Into: CSS3 Box-Sizing](http://www.hongkiat.com/blog/css3-box-sizing/)
  * What is "image replacement" and why should I care?
  * [CSS Image Replacement](http://css-tricks.com/examples/ImageReplacement/)
  * When to use HTML &lt;img&gt; vs. CSS background-image?
  * [When to use IMG vs. CSS background-image?](http://stackoverflow.com/questions/492809/when-to-use-img-vs-css-background-image)


* Lab tasks
  * Create the #container div in HTML and center it using CSS
  * Add the repeating background image using CSS and give it a fall back color 
  * Add the logo on a &lt;h1&gt; using Scott Kellum's Image Replacement Method 
  * Add your basic global styles for the site ("body, h## h2, p", etc) 
  * Add the remaining content in the HTML and style the remainder of the site using CSS



## Homework

* [All About Floats](http://css-tricks.com/all-about-floats)
* [CSS Float Theory You Should Know](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know)
