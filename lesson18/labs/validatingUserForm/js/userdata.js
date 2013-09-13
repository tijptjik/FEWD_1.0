/**
 * Suggestions only, you can implement the logics in your own way
 *
 * 1. CREATE USER OBJECT FOR THE FORM INPUTS (using Literal Notation)
 * 2. CREATE VARIABLES FOR STORING THE DOM DATA FROM THE JQUERY SELECTOR
 * 3. INITIALLY HIDE ERRORS	
 * 4. CREATE A DISPLAY FUNCTION FOR DISPLAYING THE INPUTTED DATA (can be used in the form submit event function and the clear function)
 * 5. ADD_USER FORM SUBMIT EVENT FUNCTION
 *    - validate the four user inputs
 *    - for phone number, use this RegExp object: /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/
 *    - for email, use this RegExp object: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
 * 6. CLEAR BUTTON CLICK EVENT FUNCTION
 */

$(document).ready(function(){

			$('span[id$="error"]').hide();

	    	$('input[type="submit"]').click(function(event){
			event.preventDefault();

			var name = $('#user_name').val();
			var age = $('#user_age').val();
			var phone = $('#user_ph').val();
			var email = $('#user_email').val();

			if (name.length < 3) {
				$("#user_name_error").show();
			} else {
				$("#user_name_error").hide();
			}

			if isNaN(age) {
				$("#user_age_error").show();
			} else {
				$("#user_age_error").hide();
			}

			var pattern = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;

			if (pattern.test(phone)) {
				$("#user_phone_error").show();
			} else {
				$("#user_phone_error").hide();
			}

			var emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

			if (pattern.test(email)) {
				$("#user_email_error").show();
			} else {
				$("#user_email_error").hide();
			}
		})

});