var markerSchool;

$(document).ready(function(){
	
	var mapOptions = {
		center: { lat: 59.346027, lng: 18.058272},
		zoom: 11,					//zoom
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

	var contentSchool = "<div id='content'> <h1>Medieinstitutet</h1></div>";
	var contentHome = "<div id='content'> <h1>Sk&ouml;nviksv&auml;gen 286</h1></div>";

	var infowindowSchool = new google.maps.InfoWindow ({ content: contentSchool });
	var infowindowHome = new google.maps.InfoWindow ({ content: contentHome });



	//Marker för skolan
	markerSchool = new google.maps.Marker({
		position: new google.maps.LatLng( 59.346027, 18.058272 ),
		map: map,
		title: "Medieinstitutet",
		animation: google.maps.Animation.DROP,
		icon: "finger.png",

	});

	//Visar namn när man klickar
	google.maps.event.addListener(markerSchool, 'click', function(){
			infowindowSchool.open(map, markerSchool);
	});





	//Marker för hem
	var markerHome = new google.maps.Marker({
		position: new google.maps.LatLng( 59.272191, 18.053640 ),
		map: map,
		title: "Här bor jag!",
		animation: google.maps.Animation.DROP,
		icon: "house.png",

	});

	//Visar namn när man klickar
	google.maps.event.addListener(markerHome, 'click', function(){
			infowindowHome.open(map, markerHome);
	});

	

	// google.maps.event.addListener(map, 'center_changed', function(){
	// 	window.setTimeout(function(){
	// 		map.panTo(marker.getPosition());
	// 	}, 1000);
	// });

	$("#schoolbtn").click(function(){
		map.panTo(markerSchool.getPosition());
	});

	$("#homebtn").click(function(){
		map.panTo(markerHome.getPosition());
		getZoom("1");
	});
});
