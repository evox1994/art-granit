$(document).ready(function(){
	var myPlace = new google.maps.LatLng(56.479310,84.948493);
    var myOptions = {
        zoom: 17,
        center: myPlace,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true
    }
    var contentString = '<div class="map-org-name"><span class="bold-span">Стейк Хаус "Антрекот"</span><br>'+
    '<div class="map-org-info"><span>ул. Трифонова, 22б</span></div>';
    var map = new google.maps.Map(document.getElementById("b-2-map"), myOptions); 
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
	    position: myPlace,
	    map: map,
	    title: 'Стейк Хаус "Антрекот"',
	});
	marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
});