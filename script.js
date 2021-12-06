// Define variables
var counter = 1;
var answerIsRight = 0;
var map;
var jacaranda;
var chaparralHall;
var susanaHall;
var campusBookStore;
var recreationCenter;

// Bring in the map
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

// Styles for the map
var styles = {
  remove: [
    {
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.neighborhood',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ],
};

// Map building markers
function drawRectangle(latLng, map) {
  // Conditional if statements to check which question is being answered
  // The program draws a green rectangle if correct and a red one if incorrect
  // Counter gets incremeted to the next question
  // Right answer gets set to true or false

  if (counter == 1) {
    var jacarandaLatLng = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.240997, -118.5294),
      new google.maps.LatLng(34.242119, -118.5278)
    );
    jacaranda = new google.maps.Rectangle({
      strokeOpacity: 1,
      strokeWeight: 3,
      fillOpacity: 0.1,
      map: map,
      bounds: jacarandaLatLng,
    });
    if (jacarandaLatLng.contains(latLng)) {
      jacaranda.setOptions({
        strokeColor: '#008000',
        fillColor: '#008000',
      });
      answerIsRight++;
      showRightWrong(1, true);
      document.querySelectorAll('.location')[0].style.borderColor = '#008000';
      document.querySelectorAll('.location')[0].style.color = '#008000';
    } else {
      jacaranda.setOptions({
        strokeColor: '#FF0000',
        fillColor: '#FF0000',
      });
      showRightWrong(1, false);
      document.querySelectorAll('.location')[0].style.borderColor = '#FF0000';
      document.querySelectorAll('.location')[0].style.color = '#FF0000';
    }
    counter++;
    resultsOfQuiz();
    document.querySelectorAll('.location')[1].classList.remove('hide');
  } else if (counter == 2) {
    var caperralHallLatLng = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.23785, -118.52725),
      new google.maps.LatLng(34.2386, -118.5267)
    );
    chaparralHall = new google.maps.Rectangle({
      strokeOpacity: 1,
      strokeWeight: 3,
      fillOpacity: 0.1,
      map: map,
      bounds: caperralHallLatLng,
    });
    if (caperralHallLatLng.contains(latLng)) {
      chaparralHall.setOptions({
        strokeColor: '#008000',
        fillColor: '#008000',
      });
      answerIsRight++;
      showRightWrong(2, true);
      document.querySelectorAll('.location')[1].style.borderColor = '#008000';
      document.querySelectorAll('.location')[1].style.color = '#008000';
    } else {
      chaparralHall.setOptions({
        strokeColor: '#FF0000',
        fillColor: '#FF0000',
      });
      showRightWrong(2, false);
      document.querySelectorAll('.location')[1].style.borderColor = '#FF0000';
      document.querySelectorAll('.location')[1].style.color = '#FF0000';
    }
    counter++;
    resultsOfQuiz();
    document.querySelectorAll('.location')[2].classList.remove('hide');
  } else if (counter == 3) {
    var susanaHallLatLng = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.23738956017923, -118.52938917678614),
      new google.maps.LatLng(34.23784074898235, -118.52923367995979)
    );
    susanaHall = new google.maps.Rectangle({
      strokeOpacity: 1,
      strokeWeight: 3,
      fillOpacity: 0.1,
      map: map,
      bounds: susanaHallLatLng,
    });
    if (susanaHallLatLng.contains(latLng)) {
      susanaHall.setOptions({
        strokeColor: '#008000',
        fillColor: '#008000',
      });
      answerIsRight++;
      showRightWrong(3, true);
      document.querySelectorAll('.location')[2].style.borderColor = '#008000';
      document.querySelectorAll('.location')[2].style.color = '#008000';
    } else {
      susanaHall.setOptions({
        strokeColor: '#FF0000',
        fillColor: '#FF0000',
      });
      showRightWrong(3, false);
      document.querySelectorAll('.location')[2].style.borderColor = '#FF0000';
      document.querySelectorAll('.location')[2].style.color = '#FF0000';
    }
    counter++;
    resultsOfQuiz();
    document.querySelectorAll('.location')[3].classList.remove('hide');
  } else if (counter == 4) {
    var campusStoreLatLng = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.237, -118.52875),
      new google.maps.LatLng(34.23776, -118.5276)
    );
    campusBookStore = new google.maps.Rectangle({
      strokeOpacity: 1,
      strokeWeight: 3,
      fillOpacity: 0.1,
      map: map,
      bounds: campusStoreLatLng,
    });
    if (campusStoreLatLng.contains(latLng)) {
      campusBookStore.setOptions({
        strokeColor: '#008000',
        fillColor: '#008000',
      });
      answerIsRight++;
      showRightWrong(4, true);
      document.querySelectorAll('.location')[3].style.borderColor = '#008000';
      document.querySelectorAll('.location')[3].style.color = '#008000';
    } else {
      campusBookStore.setOptions({
        strokeColor: '#FF0000',
        fillColor: '#FF0000',
      });
      showRightWrong(4, false);
      document.querySelectorAll('.location')[3].style.borderColor = '#FF0000';
      document.querySelectorAll('.location')[3].style.color = '#FF0000';
    }
    counter++;
    resultsOfQuiz();
    document.querySelectorAll('.location')[4].classList.remove('hide');
  } else if (counter == 5) {
    var reccBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.2393, -118.5252),
      new google.maps.LatLng(34.24068, -118.52465)
    );
    recreationCenter = new google.maps.Rectangle({
      strokeOpacity: 1,
      strokeWeight: 3,
      fillOpacity: 0.1,
      map: map,
      bounds: reccBounds,
    });
    if (reccBounds.contains(latLng)) {
      recreationCenter.setOptions({
        strokeColor: '#008000',
        fillColor: '#008000',
      });
      answerIsRight++;
      showRightWrong(5, true);
      document.querySelectorAll('.location')[4].style.borderColor = '#008000';
      document.querySelectorAll('.location')[4].style.color = '#008000';
    } else {
      recreationCenter.setOptions({
        strokeColor: '#FF0000',
        fillColor: '#FF0000',
      });
      showRightWrong(5, false);
      document.querySelectorAll('.location')[4].style.borderColor = '#FF0000';
      document.querySelectorAll('.location')[4].style.color = '#FF0000';
    }
    counter++;
    document.getElementById('correctCount').classList.remove('hide');
    resultsOfQuiz();
    document.querySelectorAll('.location')[5].classList.remove('hide');
  } else {
    counter == 1;
  }
}

function resultsOfQuiz() {
  document.getElementById('correctCount').innerHTML = answerIsRight;
}

function showRightWrong(number, correct) {
  if (correct == true) {
    document.getElementById('result' + number).innerHTML =
      '<i class="bi bi-emoji-smile"></i>';
  } else {
    document.getElementById('result' + number).innerHTML =
      '<i class="bi bi-emoji-frown"></i>';
  }
}
