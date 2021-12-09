# csun-map-quiz
This is an online game made in javascript using the Google Maps API. The game consist of a quiz that asks you to double click on the correct location of the csun buildings on the map.

Link to Website:
https://eminshamshoian.github.io/csun-map-quiz/

Entire Page:
![Screen Shot 2021-12-09 at 12 10 49 PM](https://user-images.githubusercontent.com/47337592/145468518-00b0654f-9aa9-4436-96ab-6a133bc1af8a.png)

The website uses stricly javascript and no frontend frameworks. The google maps API gets called with the proper styling options so that streen names and building names do not show.

Map Initialization w/Event Listener:
```
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 34.238944, lng: -118.5274 },
    zoom: 17,
    disableDoubleClickZoom: true,
    zoomControl: false,
    mapTypeControl: false,
    draggable: false,
    keyboardShortcuts: false,
    streetViewControl: false,
  });
  map.setOptions({ styles: styles['remove'] });
  map.addListener('dblclick', function (e) {
    drawRectangle(e.latLng, map);
  });
}
```
