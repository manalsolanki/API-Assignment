// Getting the form from HTML
var form = document.getElementById('form');
var timeTakes ="";
var youtubediv = document.getElementById("youtubeDiv");


// Form  of distance on Sumit
form.onsubmit = getDistance;

function getDistance(event) {
  event.preventDefault()
  //console.log(location)
  var origin = document.getElementById('start').value;
  destination = document.getElementById('end').value;
  // Distance Mtrix API
  service = new google.maps.DistanceMatrixService();

  // Giving estential values.
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
    // var orig = document.getElementById("orig"),
    //   dest = document.getElementById("dest"),
    //   dist = document.getElementById("dist");
    // console.log(response);
    if (status == "OK") {
      origin.value = response.destinationAddresses[0];
      destination.value = response.originAddresses[0];
      timeTakes = response.rows[0].elements[0].duration.text;
      dist.innerHTML = "Estimated time to travel " + response.rows[0].elements[0].distance.text + " is " + response.rows[0].elements[0].duration.text;
      youtubediv.classList.remove("hidden");
      youtubediv.classList.add("show");
    
      const finaltime = timeTakes.split(" ");
      var Duration;
      if (finaltime[0] < 20) {
     Duration = "medium"
      }
      else {
    Duration = "long"
}
document.getElementById("time").innerHTML = Duration;
    } else {
      alert("Error: " + status);
    }
  }

}







