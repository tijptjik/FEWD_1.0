![General Assembly](assets/images/ga.png)
# FEWD LESSON 17

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda
<aside class="notes"></aside>

* Review
* Events
* Mouse events
* Form events
* Keyboard events
* Timer events



## Review
<aside class="notes">Kit (20 Min) Homework or any other concept for reviews </aside>

**Review**



## Events
<aside class="notes"></aside>

**What is an event?**

* In simple terms, and event occurs when 'something' happens. For example,
  * The left mouse button is clicked
  * The ENTER key is pressed on the keyboard
* Real life examples
  * The clock rings in the morning
  * The fire alarm rings when there is a fire



## Events
<aside class="notes"></aside>

**What will you do when the clock rings in the morning?**

**What will you do when the fire alarm rings?**



## Events
<aside class="notes"></aside>

**SYNTAX**

```
$('SUBJECT').EVENTNAME(HANDLER);

```

* SUBJECT
  * The subject of the event
* EVENTNAME
  * The name of the event
* HANDLER
  * The action(function) should take when the event is triggered.



## Events
<aside class="notes"></aside>

```
// WHEN THERE IS A FIRE
$("#fire-alarm").ring(function(event) {
  if (is_testing()) {
    // CONTINUE TO SLEEP
  } else {
    // RUN!!
  }
});
```



## Events
<aside class="notes"></aside>

* Mouse events
* Keyboard events
* Form events
* Timer events
* [Full list of available events](https://developer.mozilla.org/) 



## Mouse events
<aside class="notes">Mart</aside>

* .click()
  * User has pressed and released the mouse button
* .mousedown()
  * Mouse button is pressed over the element
* .mouseup()
  * Mouse button is released over the element
* .mousemove()
  * User has moved the mouse over the element.



## Mouse events
<aside class="notes"></aside>

```
<!doctype html>
<html>
  <head>
    <title>Events</title>
    <script src="jquery.js"></script>
  </head>
  <body>
    <button id="btn">Click me</button>
  </body>
</html>
```

```
$('#btn').click(function(event){
  console.log(event);
})
```



## Mouse events
<aside class="notes"></aside>

**The event argument in the handler function give you details about the event**

* event.type
* event.pageX
* event.pageY
* event.timestamp



## Mouse events
<aside class="notes"></aside>

**In Class Lab** : coa_MouseEvents



##Implement the same logic for multiple events
<aside class="notes"></aside>

```
$("body").mousedown(function(event) {
  var x = event.pageX;
  var y = event.pageY;
  console.log("Mouse at", x, y);
});

$("body").mouseup(function(event) {
  var x = event.pageX;
  var y = event.pageY;
  console.log("Mouse at", x, y);
});
```



##Implement the same logic for multiple events
<aside class="notes"></aside>

**.on("event1, event2, event3, ...", function(event){})**

```
$("body").on("mousedown mouseup", function(event) {
  var x = event.pageX;
  var y = event.pageY;
  console.log("Mouse at", x, y);
});
```



## Form events
<aside class="notes">Kit</aside>

**What is a form?**

* A submission form for a website to collect data from visitors
* Common HTML tags inside the form <form> tag
  * <input>
  * <textarea>
  * <select>



## Form events
<aside class="notes"></aside>

**List of available \<input\>**

```
<!-- Simple textbox -->
<input type="text"><br>

<!-- Simple checkbox -->
<input type="checkbox" value="good">Good<br>

<!-- Simple radio buttons -->
<!-- For single option, make sure they have the same name attr. -->
<input type="radio" name="gender" value="M">Male<br>
<input type="radio" name="gender" value="F">Female<br>

<!-- Selection list -->
<select>
  <option value="M">Male</option>
  <option value="F">Female</option>
</select>
<br>

<!-- Text area -->
<textarea></textarea>

<!-- Others -->
<input type="password">
<input type="image">
<input type="hidden">
<input type="submit">
<input type="reset">
```



## Form events
<aside class="notes"></aside>

* submit()
  * Form has been submitted (user clicked "submit" / pressed return)
* change()
  * The user changed something in the element
* select()
  * User has selected a text in an in text input or textarea



## Form events
<aside class="notes"></aside>

* focus()
  * User has placed his cursor on an element or the element is selected
* blur()
  * The element has lost focus (eg. user has clicked somewhere else)



## Form events
<aside class="notes"></aside>

**Getter and Setter for form elements**

* GETTER
  * $(<selector>).val();
* SETTER
  * $(<selector>).val("new value");



## Form events
<aside class="notes"></aside>

**Preventing default event behavior**

```
$("form").submit(function(event) {
  event.preventDefault();
  // form will now not POST / redirect
  // so you can use the data!
});
```



## Keyboard events
<aside class="notes">Kit</aside>

* keydown()
  * Key has been pressed
* keyup()
  * Key has been released
* keypress()
  * Key has been "pressed" (up and down)



## Keyboard events
<aside class="notes"></aside>

**Which key is pressed?**

* event.which
* [KeyCode list](http://asquare.net/javascript/tests/KeyCode.html)
* [KeyCode search](http://jsbin.com/uyorip/2/quiet#k_56)

```
$('textarea').keypress(function(event){
  console.log(event.which)
});
```



## Keyboard events
<aside class="notes"></aside>

**In Class Lab** : coa_KeyboardEvents



## Timer events
<aside class="notes">Kit</aside>

**Timers let us execute code after a period of time, or over and over again at a set interval.**

* setTimeout(function, delay);
  * Execute a function after a delay in ms
* setInterval(function, interval);
  * Execute a function continuously at a regular interval in ms



## Timer events
<aside class="notes"></aside>

**setTimeout example**

```
function timerExample() {
  console.log("1 second has passed!");
}

var timerId = setTimeout(timerExample, 1000);
```



## Timer events
<aside class="notes"></aside>

**setInterval example**

```
function intervalExample() {
  console.log(“1 second has passed!”);
}

var timerId = setInterval(intervalExample, 1000);


// Will print forever! We can stop it with:
clearInterval(timerId);
```



## Timer events
<aside class="notes"></aside>

**Stopping timers**

* When a timer is set, a timer id is returned. We can use this to stop the timer.
* clearTimeout(timerId);
* clearInterval(timerId);



## Timer events
<aside class="notes"></aside>

**In Class Lab** : Create a timer in codepen



## Events
<aside class="notes"></aside>

**In Class Lab** : coa_colors_events