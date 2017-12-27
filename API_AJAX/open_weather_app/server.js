$(document).ready(function(){

    $('#submitWeather').click(function(){
        
        var city = $("#city").val();

        if(city != ''){
            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=04bb6b1f2b51b9600420c325365aac50",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                   var widget = show(data);

                   $("#show").html(widget);

                   city = $("#city").val('');
                }

            });

        } else {

            $("#error").html(  "<div class='alert alert-danger alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>Field cant be empty!</div>");

        }

    });

});

function show(data){
    return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>" +
    "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" + 
    "<h3>Description: <img src='http://openweathermap.org/img/w//"+data.weather[0].icon+".png'>" + data.weather[0].description + "</h3>" + "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" + "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>" + "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
    "<h3><strong>Min Temperature</strong>: " + data.main.temp_min + "&deg;F</h3>" +
    "<h3><strong>Max Temperature</strong>: " + data.main.temp_max + "&deg;F</h3>" +
    "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
    "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>";
}