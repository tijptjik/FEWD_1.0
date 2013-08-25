$(document).ready(function(){

	/* What is JSON? */
	//JSON stands for Javascript Object Notation
	/* Let's imagine you've purchased some furniture from a store, and you want it delivered. In the shop, the chest-of-drawers you've purchased is a living object:
	
	var chestOfDrawers = {
	    color: 'red',
	    numberOfDrawers: 4
	}

	It's easier to ship if the company dismantles it (convert from Object to JSON using JSON.stringify()). It's in flat pack form easier to transport.
	
	'{"color":"red","numberOfDrawers":4}'
	
	Notice in JSON all properties get  double quotes and strings also get double quotes. In fact sing;le quotes are forbidden. Numbers and Boolean do not neccesarily need quotes. All other syntax rules follow the same as Javascript Object notation rules.
	
	(To ship/get the furniture we use $getJSON();) When you receive it, you then rebuild the chest-of-drawers (using $.parseJSON();). Its now back in an object form.
	
	The reason behind JSON/ XML and YAML is to enable data to be transferred between programming languages in a format both participating languages can understand; you can't give PHP or C++ your JavaScript object directly; because each language represents an object differently under-the-hood. However, because we've stringified the object into JSON; i.e. a standardized way to represent data, we can transmit the JSON representation of the object to another langauge (C++, PHP, Ruby, Python), they can recreate the JavaScript object we had into their own object based on the JSON representation of the object.
	*/
	//Javascript Object (using Literal Notation)
	var ride = {
		make: 'Yamaha',
		model: 'V-Star Silverado 1100',
		year: 2005,
		purchased: new Date(2005,3,12),
		owner: 	{
			firstName: 'Spike',
			lastName: 'Spiegel'
		},
		product: function() {
			return this.make+' '+this.model;
		}
	};
	console.log(ride);
	//returns full object
	
	/*---------- JSON.stringify() -----------
	Convert a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified. More at: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify
	*/
	
	var JSONride = JSON.stringify(ride);
	
	console.log(JSONride);
	 
	//returns {"make":"Yamaha","model":"V-Star Silverado 1100","year":2005,"purchased":"2005-04-12T04:00:00.000Z","owner":{"firstName":"Spike","lastName":"Spiegel"}}
	
	//notice the date object is merely a string now, also notice product is gone (can't convert functions).
	
	/*---------- $.parseJSON() ----------
	Takes a well-formed JSON string and returns the resulting JavaScript object. More at: http://api.jquery.com/jQuery.parseJSON/
	*/
	
	var parseJSONride = $.parseJSON(JSONride);
	
	console.log(parseJSONride);
	
	//returns object minus the product function (lost during stringify)
	
	
});