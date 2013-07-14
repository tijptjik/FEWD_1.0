![General Assembly](assets/images/ga.png)
# FEWD LESSON 18

## Lab Session

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Code, code and CODE!
* Using jQuery selector
* Regular Expression
* More notes on validation



## Calculator Box
<aside class="notes"></aside>

**1st: Calculator Box**



## Calculator User Input
<aside class="notes"></aside>

**2nd: Calculator User Input**



## Using jQuery selector
<aside class="notes"></aside>

* Selecting a jQuery object from DOM is costly

**DON'T DO**

```
$('#abc').css('color', 'red');
$('#abc').hide();
$('#abc').click(function(){ CODE });
$('#abc').mouseup(function(){ CODE });
$('#abc').mousedown(function(){ CODE });
```

**DO**

```
var abc = $('#abc');
abc.css('color', 'red');
abc.hide();
abc.click(function(){ CODE });
abc.mouseup(function(){ CODE });
abc.mousedown(function(){ CODE });
```



## Regular Expression
<aside class="notes"></aside>

**Using Regular Expression**

* regex or regexp in short form
* Check if a given string match a specific pattern
  * ex. email, phone... etc
* Useful for validation
* We make use of the RegExp Object in Javascript
  * [JavaScript RegExp Object](http://www.w3schools.com/jsref/jsref_obj_regexp.asp)
  * [JavaScript test() Method](http://www.w3schools.com/jsref/jsref_regexp_test.asp)



## Regular Expression
<aside class="notes"></aside>

**SYNTAX**

```
RegExpObject.test(string)
```

```
var str="Hello world!";
//look for "Hello"
var patt = /Hello/g;
var result = patt.test(str);
document.write("Returned value: " + result); 
```



## More notes on validation
<aside class="notes"></aside>

**Check the number of characters in a string**

```
var str = "Hello";
document.write("Lenth of string: " + str.length); 
```



## More notes on validation
<aside class="notes"></aside>

**Check a numeric only string**

* NaN: Not a Number

```
var str = "123";
document.write("Not a Number: " + isNaN(str)); 
```



## Validating User Forms
<aside class="notes"></aside>

**3nd: Validating User Forms**



## Memory Game
<aside class="notes"></aside>

**4th: Memory Game**