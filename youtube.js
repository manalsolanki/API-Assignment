var youtubeForm = document.getElementById('youtubeForm');
  // For calling youtube
  youtubeForm.onclick = authenticate 
  // console.log(response.rows[0].elements[0].distance.text)


    function authenticate() {
      return gapi.auth2.getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
          .then(function() {  console.log("Sign-in successful"); loadClient },
                function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
        console.log("load client")
      gapi.client.setApiKey("AIzaSyBRK5kB4Hs78ROPUP-708SZHUy4dwq_1o4");
      return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
          .then(function() { console.log("GAPI client loaded for API");  execute;},
                function(err) { console.error("Error loading GAPI client for API", err); });
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
          .then(function(response) {
            var result = response;
                  // Handle the results here (response.result has the parsed body).
                  // console.log("Response", result.result.items[0]);
                  finalResult(result);
                },
                function(err) { console.error("Execute error", err); });
    }
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "488631584359-7cfqd4e95b8da4ji50028ftvd3jr24nf.apps.googleusercontent.com"});
    });
    function finalResult(result)
    {
      searchResult = result;
      console.log(searchResult);
      items = searchResult.result.items
       items.forEach(element => {
         console.log("Item 1" + element)
       });
    }
  