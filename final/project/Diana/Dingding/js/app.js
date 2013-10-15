

$(document).ready(function(){

    // make the #bottom width fix the viewport size.
    $(window).resize(function() {
        $('#bottom').css('width', window.innerWidth+'px');
    });

$('#home-container').on('click', function(){
    $(this).slideToggle()
})

var stations = [
    {
        name:'Kennedy Town Terminus',
        coordinates: [48.40129,8.3823],
        sequence:2,
        media:'images/tram-2.jpg',
        caption:'Near the bus terminus the Tung Wan Smallpox Hospital',
    },{
        name:'North Street',
        coordinates: [48.40129,8.3823],
        sequence:3,
        media:'images/tram-3.jpg',
        caption:'First stop in Kennedy Town',
    },{
        name:'Kennedy Town Ladies',
        coordinates: [48.40129,8.3823],
        sequence:4,
        media:'images/tram-4.jpg',
        caption:'Lunch time',
    },{
        name:'Urban Plants',
        coordinates: [48.40129,8.3823],
        sequence:5,
        media:'images/tram-5.jpg',
        caption:'City decor',
    },{
        name:'Skek Tong Tsui Terminus',
        coordinates: [48.40129,8.3823],
        sequence:6,
        media:'images/tram-6.jpg',
        caption:'Water',
    },{
        name:'Central',
        coordinates: [48.40129,8.3823],
        sequence:7,
        media:'images/tram-7.jpg',
        caption:'Eastern port',
    },{
        name:'HSBC',
        coordinates: [48.40129,8.3823],
        sequence:8,
        media:'images/tram-8.jpg',
        caption:'Sunday Holiday'
    },{
        name:'Wan Chai',
        coordinates: [48.40129,8.3823],
        sequence:9,
        media:'images/tram-9.jpg',
        caption:'Old lady',
    },{
        name:'Causeway Bay',
        coordinates: [48.40129,8.3823],
        sequence:10,
        media:'images/tram-10.jpg',
        caption:'White Flower Oil',
    },{
        name:'Hoi Foo Street',
        coordinates: [48.40129,8.3823],
        sequence:11,
        media:'images/tram-11.jpg',
        caption:'Twins',
    },{
        name:'Chai Wan',
        coordinates: [48.40129,8.3823],
        sequence:12,
        media:'images/tram-12.jpg',
        caption:'Chai Wan Road, the end',
    }
]

stations.each(
    function(station){

        // use h4 instead of h1 for station.name
        $('#panels').append(
            '<div class="panel">' +
                '<img id="img-' + station.sequence + '" src="' + station.media + '">' +
                '<h4>' + station.name + '</h4>' + 
                '<p>' + station.caption + '</p>' +
            '</div>'
        )
    }
)


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

    Station.prototype.panel = function() {
        stationHTML = '<section><h2>' + this.name + '</h2><img class="stationImage">' + this.media + '</img><p>'+ this.caption+ '</p></section>'
        $('#panels').append(stationHTML)
    };
}


var SheungWan = new Station(stations[0])
});




