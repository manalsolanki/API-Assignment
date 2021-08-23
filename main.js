function getResponse(){
    fetch("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyCZX183s5aO_GDv_mZ2TL9M4U5Pjg7Cs4",{
        mode: 'no-cors' // 'cors' by default
      }
        ).then(Response=>console.log(Response.json()))
}

getResponse();