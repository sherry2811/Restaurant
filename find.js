function initMap() {
  var myLatLng = {lat: 56.341087, lng: -2.801291};
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    center: myLatLng,
    zoomControl: true,
    scaleControl: true,
    mapTypeControl: true,
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Our Café'
  });
 }
