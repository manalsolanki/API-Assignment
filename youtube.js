var youtubeForm = document.getElementById('youtubeForm');
var flag =0;
  // For calling youtube
  youtubeForm.onclick = authenticate;
  // console.log(response.rows[0].elements[0].distance.text)
var playSong = document.getElementById('playSong');
playSong.onclick = execute;

  var serachResult;
  var flag=0;
  function authenticate() {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
      .then(function () { console.log("Sign-in successful"); },
        function (err) { console.error("Error signing in", err); })
        .then(loadClient);
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyBRK5kB4Hs78ROPUP-708SZHUy4dwq_1o4");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function () { console.log("GAPI client loaded for API"); flag = 1;},
        function (err) { console.error("Error loading GAPI client for API", err);  })     
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "location": "21.5922529,-158.1147114",
      "locationRadius": "10mi",
      "q": "surfing",
      "type": [
        "video"
      ],
      "videoDuration": "any"
    })
      .then(function (response) {
        var result = response;
        // Handle the results here (response.result has the parsed body).
        // console.log("Response", result.result.items[0]);
        finalResult(result);
      },
        function (err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "488631584359-7cfqd4e95b8da4ji50028ftvd3jr24nf.apps.googleusercontent.com" });
  });
  
  function finalResult(result) {
    searchResult = result;
    let videoId = searchResult.result.items[0].id.videoId;
    let iframe = document.getElementById("myFrame");
    iframe.classList.remove("hidden");
    iframe.classList.add("show");
    iframe.src=`https://www.youtube.com/embed/${videoId}`;
   
  }

  if(flag == 1)
  {
      execute;
  }