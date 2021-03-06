$(document).ready(function(){

var long;
var lat;
var temp;

//get geolocation information

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;

    // request weather information from Dark Sky API
      var apiUrl = 'https://api.darksky.net/forecast/18fcaf9b1475d7eb30b1e5f304e30e3f/'+lat+','+long;

    // request weather information from open weather API

//testing
      console.log(apiUrl);


var weatherInfo = function (data) {
//    console.log(data.currently.temperature);
    $("#latitude").text(data.currently.summary);
    $("#longitude").text(data.timezone);
    $("#temp").text(data.currently.temperature);
};

// JSON call to open weather API
$.getJSON(apiUrl,weatherInfo,'jsonp');
    });
  }
});