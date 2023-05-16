// Initialize variables
    let map;
    let markers = [];
    let circles = [];
    let rectangles = [];
    let polygons = [];
    let polylines = [];
// Initialize the map
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2
      });
// Add event listeners
      map.addListener('click', showCoordinates);

      const markerForm = document.getElementById('markerForm');
      markerForm.addEventListener('submit', placeMarker);

      const directionsForm = document.getElementById('directionsForm');
      directionsForm.addEventListener('submit', getDirections);

      const circleForm = document.getElementById('circleForm');
        circleForm.addEventListener('submit', placeCircle);

        const rectangleForm = document.getElementById('rectangleForm');
        rectangleForm.addEventListener('submit', placeRectangle);

        const polygonForm = document.getElementById('polygonForm');
        polygonForm.addEventListener('submit', placePolygon);

        const polylineForm = document.getElementById('polylineForm');
        polylineForm.addEventListener('submit', placePolylines);

// Function to place a marker on the map
      function placeMarker(event) {
        event.preventDefault();
        const name = document.getElementById('markerName').value;
        const marker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          title: name
        });
        markers.push(marker);
      }
 // Function to get directions between two locations
      function getDirections(event) {
        event.preventDefault();
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();

        directionsRenderer.setMap(map);

        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING'
          },
          function (response, status) {
            if (status === 'OK') {
              directionsRenderer.setDirections(response);
            } else {
              alert('Directions request failed due to ' + status);
            }
          }
        );
      }
// Function to place a circle on the map
      function placeCircle(event) {
  event.preventDefault();
  const center = document.getElementById('circleCenter').value.split(',');
  const lat = parseFloat(center[0].trim());
  const lng = parseFloat(center[1].trim());
  const radius = parseFloat(document.getElementById('circleRadius').value);

  const circle = new google.maps.Circle({
    center: { lat: lat, lng: lng },
    radius: radius,
    map: map
  });
  circles.push(circle);
}
// Function to place a rectangle on the map
function placeRectangle(event) {
  event.preventDefault();
  const bounds = document.getElementById('rectangleBounds').value.split(',');
  const lat1 = parseFloat(bounds[0]);
  const lng1 = parseFloat(bounds[1]);
  const lat2 = parseFloat(bounds[2]);
  const lng2 = parseFloat(bounds[3]);

  const rectangle = new google.maps.Rectangle({
    bounds: {
      north: Math.max(lat1, lat2),
      south: Math.min(lat1, lat2),
      east: Math.max(lng1, lng2),
      west: Math.min(lng1, lng2)
    },
    map: map
  });
  rectangles.push(rectangle);
}
// Function to place a polygon on the map
function placePolygon(event) {
  event.preventDefault();
  const coordinates = document.getElementById('polygonCoordinates').value.split(',');
  const path = [];

  for (let i = 0; i < coordinates.length; i += 2) {
    const lat = parseFloat(coordinates[i]);
    const lng = parseFloat(coordinates[i + 1]);
    path.push({ lat: lat, lng: lng });
  }

  const polygon = new google.maps.Polygon({
    paths: path,
    map: map
  });
  polygons.push(polygon);
}
// Function to place polylines on the map
function placePolylines(event) {
  event.preventDefault();
  const coordinates = document.getElementById('polylineCoordinates').value.split(',');
  const path = [];

  for (let i = 0; i < coordinates.length; i += 2) {
    const lat = parseFloat(coordinates[i]);
    const lng = parseFloat(coordinates[i + 1]);
    path.push({ lat: lat, lng: lng });
  }

  const polyline = new google.maps.Polyline({
    path: path,
    map: map
  });
  polylines.push(polyline);
}

// Function to show coordinates when the map is clicked
      function showCoordinates(event) {
        const infoWindow = new google.maps.InfoWindow();

        const marker = new google.maps.Marker({
          position: event.latLng,
          map: map
        });
// Create a marker at the clicked position
        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.setContent(
            'Latitude: ' + event.latLng.lat() + '<br>Longitude: ' + event.latLng.lng()
          );
          infoWindow.open(map, marker);
        });
      }
    }
  