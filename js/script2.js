$(document).ready(function(){

var long;
var lat;

//get geolocation information

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;

    // concatanating API URL from Open Weather map
      var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=f15c4abae2caaffe8aa81668a8808bdf';

// request weather information from open weather API
var weatherInfo = function (data) {

    var wMainWeather = data.weather;
    var wDescription = wMainWeather[0].main;
    var humidity = data.main.humidity;
    var kTemp = data.main.temp;
    var wSpeed = data.wind.speed;
    var location = data.name;
    var cTemp = Math.round(kTemp - 273.15);
// round fahrenheit temp to 2 decimal places
    var fTemp = (kTemp * (9/5) - 459.67).toFixed(2);
    $('#temp').text(cTemp+' Celsius');
// toggling between Celsius and fahrenheit
    $('#temp-toggle').change(function() {
        if ($(this).prop('checked')) {
            $('#temp').text(cTemp+' Celsius');
        } else {
            $('#temp').text(fTemp+' Fahrenheit');
        }
    });

    $('#location').html(location);
    $('#humidity').html('Humidity: '+humidity);
    $('#wSpeed').html('Wind Speed: '+wSpeed);
    $('#desc').html('Expect '+wDescription);

// change icon based on weather description
    if (wDescription==='Clouds') {
        $('#animated-weather').attr('src','img/weather/cloudy.svg');
    } else if (wDescription==='Rainy') {
        $('$animated-weather').attr('src','img/weather/rainy.svg');
    }  else if (wDescription==='Snow') {
        $('$animated-weather').attr('src','img/weather/thunder.svg');
    }

};

// JSON call to open weather API
$.getJSON(apiUrl,weatherInfo,'jsonp');

    });
  } else {
    $('#not-available').attr('class','text-center');
    $('#not-available').html('Weather information not available for your location');
  }
});