	var list = [];
	var food_item;
	var found = false;
	var response = prompt('(a)dd item or (q)uit?');
	while(response === 'a'){
		food_item = prompt('What do you need to add');
		for (var i = 0; i<list.length; i++){
			if(list[i] === food_item ){
				found = true;
				alert('This item is already on the list');
				break;
			}
		}
		if (!found){
			list.push(food_item);
		}
		found = false;
		response = prompt('(a)dd item or (q)uit?');
	}

	// Print the list to the console
	console.log('My Shopping List');
	for (var i=0; i < list.length; i++){
		console.log(list[i]);
	}