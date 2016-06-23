// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;


var $results = $("#info");
var source = $("#earthquakes-list").html();
var template = Handlebars.compile(source);


	myMap();

	$.get(weekly_quakes_endpoint, function (data) {  

	    console.log(data);
	    var trackHTML = template({ earthquakes: data.features });
	    $results.append(trackHTML);
	    var listQuakes = data.features;
	    console.log(listQuakes);

	    for (var i=0; i<listQuakes.length; i++) {
	    	var latitude=listQuakes[i].geometry.coordinates[0];
	    	var longitude=listQuakes[i].geometry.coordinates[1];
	    
			var myLatLng = {lat: latitude, lng: longitude};

			var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
	});
	    }

	});


	function myMap() {
		var myLatLng = {lat: 39.76, lng: -105.01};


		map = new google.maps.Map(document.getElementById("map"), {
		zoom: 2, 
		center: myLatLng
	});
	
}

	

