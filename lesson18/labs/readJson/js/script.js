$('#btn').click(function(event){
	console.log("working!");

	var data = $('#data').val();

	$.getJSON(data, function(json, textStatus, jqXHR){

		$('#result').append('<p>This is the result:</p>');

		for (var i = 0; i < json.length; i++) {
			$('#result').append('<p> name: ' + json[i].name + '</p>')
		}
	})
});