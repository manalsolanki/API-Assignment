var form = document.getElementById('form');

form.onsubmit = getDistance;

function getDistance(event) {
  event.preventDefault()
  console.log(location)
  var origin = document.getElementById('start').value
  destination = document.getElementById('end').value
  service = new google.maps.DistanceMatrixService();

  service.getDistanceMatrix({
    origins: [origin],
    destinations: [destination],
    travelMode: google.maps.TravelMode.DRIVING,
    avoidHighways: false,
    avoidTolls: false
  },
    callback
  );

  function callback(response, status) {
    var orig = document.getElementById("orig"),
      dest = document.getElementById("dest"),
      dist = document.getElementById("dist");
    console.log(response);
    if (status == "OK") {
      console.log(response);
      orig.value = response.destinationAddresses[0];
      dest.value = response.originAddresses[0];
      dist.innerHTML = response.rows[0].elements[0].duration.text;
      console.log(response.rows[0].elements[0].duration.text)
    } else {
      alert("Error: " + status);
    }
  }
  
}


