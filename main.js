var markerSchool;

$(function(){
	
	var mapOptions = {
		center: { lat: 59.346527, lng: 18.058272},
		zoom: 15,					//zoom
		scrollwheel: false,			//stäng av scrollzoom
		disableDefaultUI: false 	//stäng av användarfunktioner
	};

	var mapStyle = [{
		"featureType": "all",
		"elementType": "geometry",
		"stylers": [
		{ "lightness": 20 },
		{ "saturation": -100 },
		{ "gamma": 0.76 } 
		]
	}];

	var map = new google.maps.Map(
		document.getElementById('map'),
		mapOptions
		);


	var startPos;
	var walkPath;
	navigator.geolocation.getCurrentPosition(function(position) {
		startPos = position;
		var lineCoordinates = [
			new google.maps.LatLng(startPos.coords.latitude, startPos.coords.longitude),
		];
		walkPath = new google.maps.Polyline({
			path: lineCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
 		 });

		walkPath.setMap(map);
	});
	
	navigator.geolocation.watchPosition(function(position) {
  		console.log('current lat pos: ' + position.coords.latitude);
  		console.log('current long pos: ' + position.coords.longitude);
  		updateLine(position.coords.latitude, position.coords.longitude, walkPath);

  		map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
	});
	
	//Aktivera stylingen till kartan
	map.setOptions({styles: mapStyle});



	
});

function updateLine(latitude, longitude, poly) {
	var path = poly.getPath().getArray();
	// add new point
	path.push(new google.maps.LatLng(latitude, longitude));
	// update the polyline with the updated path
	poly.setPath(path);
}

