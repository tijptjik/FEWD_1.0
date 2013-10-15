<html>
<head>
  <link href='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.css' rel='stylesheet' />
  <!--[if lte IE 8]>
    <link href='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.ie.css' rel='stylesheet' />
  <![endif]-->
  <script src='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.js'></script>
  <style>
  #map {
    width:600px;
    height:400px;
  }
  </style>
</head>
<body>
  <div id='map' class='dark'></div>
  <script type='text/javascript'>
  var map = L.mapbox.map('map', 'examples.map-y7l23tes')
      .setView([37.9, -77], 5);
  </script>
</body>
</html>