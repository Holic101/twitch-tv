window.onload = function init() {

  var regularStreamer = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"];

  //iterate through the given streamer array
  for (var i =0; i < regularStreamer.length; i++){

  //assign the API url
  var url ="https://api.twitch.tv/kraken/channels/"+regularStreamer[i]+"?callback=?";

  $.getJSON(url, function(data){
    console.log(data);
    //get the channel name
    var displayName = data.display_name;
    //get the channel logo
    var logo = data.logo == null ? "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" : data.logo;

    var streamer = document.getElementById("streamer");
    //create a new div element
    var singleStream = document.createElement("div");
    //assign that new element the class streamerStyle
    singleStream.className = "streamerStyle";
    var link = data.url;
   if (data.status == null){
     var status = "Offline"
   }
    else if (data.status === 422) {
      var status = "Account closed";
      var displayName = data.message;
    }
    else {
      var status = data.status;
    }
    //include the logo inside the new element
    singleStream.innerHTML = "<div class='row singleStreamer'><a class='textStyle' href=" + link + " target = _blank><div class ='col-md-3'><img class='img-responsive img-circle' src=" + logo + " alt='logo'></div><div class='col-md-9'><h3 class='streamerText'>" + displayName + "</h3><p class='streamerText'>" + status + "</p></div></a></div>";
    //append the new element below the existing streamer div
    streamer.appendChild(singleStream);
    });
  }
}
