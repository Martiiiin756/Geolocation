var markerSchool;

$(function(){
	
	var mapOptions = {
		center: { lat: 59.346027, lng: 18.058272},
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


	//Aktivera stylingen till kartan
	map.setOptions({styles: mapStyle});



	///Pseudo för polylines
	/*var lineCoordinates = [
		new google.maps.LatLng(lat, lng),
		new google.maps.LatLng(lat2, lng2),
		new google.maps.LatLng(lat3, lng3)
	];
	var flightPath = new google.maps.Polyline({
		path: lineCoordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
  });*/


});
