/**
 * Javascript Exercise: If Else Statements
 * Most of your answers should be stored in variables called q1, q2 etc..
 */
// Ignore these dudes
var REPLACE_ME = true

/**
 * Question 1
 * A certain business is closed on Saturday and Sunday, 
 * the current day is Tuesday, write some logic to show that 
 * the shop is open for business
 */
var timePeriod;
var day = 'Tuesday';

if(REPLACE_ME) {
 timePeriod = "Closed for business";
} else {
 timePeriod = "Open for business";
}


/**
 * Question 2
 * The day is Thursday, modify the condition with 'REPLACE_ME' so that 
 * Thursday is considered the end of the week (hint: Wednesday is not being checked)
 */
var partOfWeek = '';
var day = 'Thursday';

if(day == 'Monday' || day == 'Tuesday') {
  partOfWeek = 'Beginning';
} else if(REPLACE_ME) {
  partOfWeek = 'Middle';
} else if(day == 'Thursday' || day == 'Friday'){
  partOfWeek = 'End';
} else {
  partOfWeek = 'Weekend';
}