
var map;
var markerList = [];

var initCoord = {
        x:22.29, 
        y:114.18,
        zoom:11
      };

//======================================Helper Functions======================================

function initLatLng(whichMarker, mapLatLng){
  if (!sessionStorage[whichMarker]){
    var markerLatLng = new google.maps.LatLng(mapLatLng.lat(), mapLatLng.lng());
    return markerLatLng;
  } else {
    var coords = JSON.parse(sessionStorage[whichMarker]);
    var markerLatLng = new google.maps.LatLng(coords.lat, coords.lng);
    return markerLatLng;
  }
}


function addMarkerListener(marker, sessionStorageMarker){
  google.maps.event.addListener(marker, "dragend", function(evt){ 
    var xyPos = marker.getPosition();
    var MarkerLatLng = {
      lat : xyPos.lat(),
      lng : xyPos.lng()
    };
    sessionStorage[sessionStorageMarker] = JSON.stringify(MarkerLatLng);
  })
}

//initialize() creates the map and the markers. It is called every time the map HTML page is revisited in its iframe.
//The if this is a subsequent reloading of the map page, then the last position and zoom of the map and the position of the markers are recalled from objects stored with the SessionStorage variable. 
function initialize() {

  var mapOptions;
  var mapLatLng, mapZoom, happyLatLng, sadLatLng;


  if (!sessionStorage.mapLatLng){
    mapLatLng = new google.maps.LatLng(initCoord.x, initCoord.y);
  } else {
    var coords = JSON.parse(sessionStorage.mapLatLng);
    mapLatLng = new google.maps.LatLng(coords.lat, coords.lng);
  }

  if (!sessionStorage.mapZoom){
    mapZoom = initCoord.zoom;      
  } else {
    mapZoom = Number(sessionStorage.mapZoom);
  }

  mapOptions = {
    center: mapLatLng,
    zoom: mapZoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

// Creating the latitude/longitude object for each map marker
  // happyLatLng = initLatLng("happy", mapLatLng);
  // sadLatLng = initLatLng("sad", mapLatLng);
  // funnyLatLng = initLatLng("funny", mapLatLng);

  // markerList[0] = new google.maps.Marker({        
  //     position: happyLatLng,
  //     map: map,
  //     draggable:true,
  //     title:"Happy!",
  //     icon: "images/happy.png"
  //   });

  // markerList[1] = new google.maps.Marker({
  //     position: sadLatLng,
  //     map: map,
  //     draggable:true,
  //     title:"Sad.",
  //     icon: "images/sad.png"
  //   });

    // Record the position of the map if it gets shifted by the user
    google.maps.event.addListener(map,"dragend",function(evt){
        var xyPos = map.getCenter();
        var MapLatLng = {
          lat : xyPos.lat(),
          lng : xyPos.lng()
        };
        sessionStorage.mapLatLng = JSON.stringify(MapLatLng);
    })

    google.maps.event.addListener(map,"zoom_changed",function(evt){
        sessionStorage.mapZoom = map.getZoom(); 
    })


    // addMarkerListener(markerList[0], "happy");

    // addMarkerListener(markerList[1], "sad");

}
// End initialize()

function setAllMap(map) {
  console.log(markerList.length);
  for (var i = 0; i < markerList.length; i++) {
    markerList[i].setMap(map);
  }
}

function clearMarkers() {
  setAllMap(null);
}

function deleteMarkers() {
  clearMarkers();
  markerList = [];
}

//======================================Button Functions======================================

function reloadPage(){
  location.reload();
}


function createMarker(){
  var newLatLng = google.maps.LatLng(initCoord.x, initCoord.y);
  var marker = new google.maps.Marker({
      position: newLatLng,
      map: map,
      draggable:true,
      title:"Happy!",
      icon: "images/happy.png"
    });
  
  markerList.push(marker);

  // addMarkerListener(markerList[(markerList.index-1)], "happy");
}

function getCenterMap(){
  console.log(map.getCenter());
}



//======================================Main Body======================================


google.maps.event.addDomListener(window, 'load', initialize);

// markerList[0] = new google.maps.Marker({        
//     position: happyLatLng,
//     map: map,
//     draggable:true,
//     title:"Happy!",
//     icon: "images/happy.png"
//   });

// console.log(map);
