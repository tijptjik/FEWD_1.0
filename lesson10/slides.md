![General Assembly](assets/images/ga.png)
# FEWD LESSON 10

## HTML5 & CSS3 & Midterm Project Code Review

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Placholderisms
* The 5 in HTML5, 3 in CSS3
* Web Forms: Talking to a server 
* Rollin' with GitHub
* Command Line Foo



## Placeholderisms
<aside class="notes">Mart (5 Min)</aside>

* [Iorem Ipsum](http://www.webresourcesdepot.com/got-bored-of-lorem-ipsum-22-different-alternatives-for-placeholder-text/)
* [IoremPixel](http://lorempixel.com/)
* [Placehold.it](http://placehold.it/)



## The 5 in HTML5
<aside class="notes">Kit (20 Min)</aside>

* `<header>`
* `<footer>`
* `<nav>`
* `<article>`
* `<section>`
* **`<time>`**
* `<aside>`
* `<hgroup>`
* **`<figure>`**
* **`<figcaption>`**
* **`<audio>`**
* 	**`<video>`**



## The `<time>` tag
<aside class="notes">Kit (20 Min)</aside>

* Nothing about style
* A tag for modern browser integration says add this datetime to an event calendar
* Example

```
<p>FEWD course starts at <time>19:00</time> every monday and wendnesday.</p>

<p>I had a date on <time datetime="2014-02-14">Valentines day</time>.</p>

<p>We finally hit the road at <time datetime="2013-06-17T19:00-22:00">the last FWED course.</time>.</p>
```



## The `<figure>` and `<figcaption>` tag
<aside class="notes">Kit (20 Min)</aside>

* Does not work for IE <= 8
* The figure element represents a unit of content, optionally with a caption, that is self-contained, that is typically referenced as a single unit from the main flow of the document, and that can be moved away from the main flow of the document without affecting the document’s meaning.
* More details: [HTML5 Doctor -The figure & figcaption elements](http://html5doctor.com/the-figure-figcaption-elements/)
* Example

```
<figure>
  <img src="http://www.sapdesignguild.org/community/IMAGES/rose.gif" alt="Rose" width="400" height="300" />
  <figcaption>Fig.1 - La view en rose</figcaption>
</figure>
```



## The `<audio>` and `<video>` tag
<aside class="notes">Kit (20 Min)</aside>

* In the past, we used flash player for media
* In HTML5, we can just make use of the `<audio>` and `<video>` tags
* [HTML5 - audio](http://www.w3schools.com/html/html5_audio.asp)
* [HTML5 - video](http://www.w3schools.com/html/html5_video.asp)



## H5BP: What websites have for breakfast
<aside class="notes">Kit (5 Min)</aside>

[HTML5 Boilerplate](http://html5boilerplate.com/)



## The 3 in CSS3
<aside class="notes">Mart (30 Min)</aside>

* Vendor Prefixes
* Box Shadow
* Border Radius
* Text Shadow
* RGBA



## Vendor Prefixes
<aside class="notes">Mart (30 Min)</aside>

* [CSS3 Please](http://css3please.com/)
* [Prefix Free](http://leaverou.github.io/prefixfree/)
* [PreFixr](http://prefixr.com/index.php)
* Mixins with [SASS](http://compass-style.org/) or [LESS](http://designshack.net/articles/css/battle-of-the-less-mixin-libraries-less-elements-vs-less-hat-vs-bootstrap/)



## Box Shadow
<aside class="notes"></aside>
```
Formal syntax: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
```
```
box-shadow: 10px 5px 5px black;
box-shadow: 3px 3px red, -1em 0 0.4em olive;
box-shadow: 0 0 1em gold;
```



## Border Radius
<aside class="notes"></aside>
```
border-radius:2em;

/* is equivalent to: */

border-top-left-radius:2em;
border-top-right-radius:2em;
border-bottom-right-radius:2em;
border-bottom-left-radius:2em;
```
[Get Funky!](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)



## Border Radius
<aside class="notes"></aside>
```
border-radius: 2em 1em 4em / 0.5em 3em;

/* is equivalent to: */

border-top-left-radius: 2em 0.5em;
border-top-right-radius: 1em 3em;
border-bottom-right-radius: 4em 0.5em;
border-bottom-left-radius: 1em 3em;
```



## Text Shadow
<aside class="notes"></aside>
````
p { text-shadow: 1px 1px 1px #000; }
p { text-shadow: 1px 1px 1px #000, 3px 3px 5px blue; }
````
1. value = The X-coordinate
1. value = The Y-coordinate
1. value = The blur radius
1. value = The color of the shadow

[Live Demo](http://css3gen.com/text-shadow/)



## RGBA
<aside class="notes"></aside>
```
div {
   background: rgba(200, 54, 54, 0.5); 
}
```
[Live Demo](http://www.css3maker.com/css-3-rgba.html)



## Web Forms: Talking to a server 
<aside class="notes">Kit (30-45 Min)</aside>

[HTML Forms and Input](http://www.w3schools.com/html/html_forms.asp)
[Zoho Web Form Builder](http://www.zoho.com/creator/online-form-builder/)



## Our history thus far...
<aside class="notes">Both (x Min)</aside>

**This marks the end of the first half of the course**

**Please take a moment in silence to contemplate**

**And spill the beans on anything that's holding you back!**

**From moving on into the wonderful world of JavaScript**

[HTML5 Doctor](http://html5doctor.com/)



## Command Line Foo : ls
<aside class="notes">Mart (30 Min)</aside>

### The `ls` command

The `ls` command is a listing command, almost the same as the `dir` command from DOS, but with more options attached. Basically with the `ls` command you can list the contents of the present directory or subdirectory.

* `ls -a` : List all the files in directory/subdirectory, without the hidden files
* `ls -l` : Displays a more detailed listing of the present directory, including size, owner, date, permissions etc



## Command Line Foo : rm
<aside class="notes">Mart (30 Min)</aside>

### The `rm` command

The `rm` command is used to remove files or directories. Please be advised that the rm commanda doesn’t remove empty directory unless “forced”

* `rm` _dirname_ or `rm` _filename_ : Removes the specified directory or the specified file
* `rm -l` _dirname/filename_ : Removes the specified directory/file with confirmation
* `rm -rf` _dirname_ : Removes the directory recursively, by forcing ( -f stands for force ). With this command you can delete the contents of a directory even if it has subdirectories or files.
* `rm -r` _dirname_ : Removes the directory even if it is empty



## Command Line Foo : cp
<aside class="notes">Mart (30 Min)</aside>

### The `cp` command

This command copies directories or files from a spot to another ( stands for copy ).

* `cp` _source_full_path_ _destination_path_ : source is the file or directory you want to copy
* Example: `cp /home/user/hello.tar.gz /home/user2/`
* `cp -r` _source_dirname_ _destination_dirname_ : this command copies an entire directory to another directory (recursively)



## Command Line Foo : Misc
<aside class="notes">Mart (30 Min)</aside>

### The mkdir command

The `mkdir` command creates a new directory (make directory).

* `mkdir` _dirname_

<br>

### The `pwd` command

This command returns the path in which you are present at that moment



## Command Line Foo : Misc
<aside class="notes">Mart (30 Min)</aside>

The `su` command

`su` stands for switch user and it’s used to change the current user and log to another. Most frequently this command is used when you want to configure Linux or modify it, by logging to root

* `su` _root_



## Command Line Foo : man
<aside class="notes">Mart (30 Min)</aside>

### The `man` command

The `man` command is probably the most important command for a Linux beginner, with the desire to learn. Using man, it returns the manual of the command asked as following:

* `man cp` : returns the manual for the `cp` command, with syntax and so on

* `man ls : returns the manual for the `ls` command with syntax

<br>

### The `cat` command

This command displays the contents of a file: `cat` _filename_



## Command Line Foo : System Utilities
<aside class="notes">Mart (30 Min)</aside>

### The `ps` command

This command shows the processes running on the machine as following:

* `ps` : shows your own processes
* `ps -ef` : shows all processes
* `ps -fu` _user_ : shows the processes of the user _user_



## Command Line Foo : System Utilities
<aside class="notes">Mart (30 Min)</aside>

### The `htop` command

The `htop` command is a Windows Taks Manager like command, showing all processes on the machine, users for each process, cpu usage and memory usage for each process

<br>

### The `du` and `df` commands

* `du` : (disk usage) shows the disk usage of the current path, displaying all the files and their size
* `df -h` : displays the disk usage of the entire machine, in a more simple and better way.



## Rollin' with GitHub
<aside class="notes">Mart (Remaining Time)</aside>
  
* git init
* git clone
* git add
* git rm
* git commit
* git push
* git pull
* git branch