// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;


var $results = $("#info");
var source = $("#earthquakes-list").html();
var template = Handlebars.compile(source);

$(document).on("ready", function() {

	$.get(weekly_quakes_endpoint, function (data) {  

	    console.log(data);
	    var trackHTML = template({ earthquakes: data.features });
	    $results.append(trackHTML);

	});	

});
