var DingDing = function(stations){
	this.stations = stations.map(function(s){ new Station(s)})
}

var Station = function(obj){
	for (var prop in obj) {
     if (obj.hasOwnProperty(prop)) {
       this[prop] = obj[prop];
     }
   }

	this.print = function(){
		console.log(this.name, 'at' , JSON.stringify(this.coordinates));
	}

	this.visitNext = function(){
		DingDing.stations.map(function(s){
			s.sequence - this.sequence - 
		})
	}
	this.visitPrev= function(){
		DingDing.stations.map(function(s){
			s.sequence - this.sequence - 
		})
	}
}

var stations = [
	{
		name:'Sheung Wan',
		coordinates: [48.40129,8.3823],
		sequence:67,
		media:'sw.mp4',
		caption:'Fruits of the seas',
	}

	name:'Sheung Wan',
		coordinates: [48.40129,8.3823],
		sequence:67,
		media:'sw.mp4',
		caption:'Fruits of the seas',
]
var SheungWan = new Station(stations[0])

