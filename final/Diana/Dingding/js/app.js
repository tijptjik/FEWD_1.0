var stations = [
	{
		name:'Sheung Wan',
		coordinates: [48.40129,8.3823],
		sequence:67,
		media:'sw.mp4',
		caption:'Fruits of the seas',
	},{
		name:'Sheung Wan',
		coordinates: [48.40129,8.3823],
		sequence:67,
		media:'sw.mp4',
		caption:'Fruits of the seas',
	}
]

var DingDing = (function(obj){
	stations = obj.map(function(s){ return new Station(s)})
	// We use the stations || {} to pass in the stations variable that you've defined,
	// or (||) if it can't find it it will pass an empty object and your script won't 
	// because of it! :)
	return {
		stations : stations
	}
}(stations || {}))

function Station(obj){
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			this[prop] = obj[prop];
		}
	}
   	// If we user CLASS.prototype.METHOD it is only stored
   	// once in memory but we can use it for all objects that
   	// are created
   	Station.prototype.toString = function() {
   		return this.name + ' @ [' + this.coordinates.toString() + ']'
   	};
	
	Station.prototype.print = function(msg){
		console.log(msg);
	}

	Station.prototype.visitNext = function(){
		DingDing.stations.map(function(s){
			s.sequence - this.sequence
		})
	}

	Station.prototype.visitPrev = function(){
		DingDing.stations.map(function(s){
			this.sequence - s.sequence
		})
	}
}


var SheungWan = new Station(stations[0])

