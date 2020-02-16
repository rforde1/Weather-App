var container = $(".container");
var cityForecast;
function creatElements(){


    var row1 = $("<div>").addClass("row");
    var row2 = $("<div>").addClass("row");
    $(".container").append(row1);
    $(".container").append(row2);
// Page Title- Main Header
    var pageTitle = $("<div>").addClass("col-md-12");
    var mainHeader = $("<h1>").addClass("main-header").text("Weather Dashboard");
    pageTitle.append(mainHeader);
    row1.append(pageTitle);

// Search city div to search all cities 
    var citySearchDiv = $("<div>").addClass("col-md-12 text-center city-search-div");
    var citySearchP = $("<p>").addClass("search-city");
    citySearchDiv.append(citySearchP);
    citySearchP.text("Search For a City : ");
    // Input area for user to type city of choice
    var citySearchInput = $("<input>");
    citySearchInput.attr("type","text");
    // Button to click which will later have event-listener
    var searchBtnEl = $("<button>").addClass("btn btn-info");
    searchBtnEl.text("Search");
// Created div to hold all searched city buttons
    var allSearchedCitiesDiv = $("<div>");
    var allSearchedCitiesHeader = $("<h4>").addClass("searched-header");
    allSearchedCitiesDiv.append(allSearchedCitiesHeader);
    allSearchedCitiesHeader.text("Cities you have searched: ");
// Break to variable to help with layout of page

    var br = $("<br>");
    allSearchedCitiesDiv.append(br);

    citySearchDiv.append(citySearchInput);
    citySearchDiv.append(searchBtnEl);
    citySearchDiv.append(allSearchedCitiesDiv);

    var cityIndex = $("<div>").addClass("col-md-12 city-index");
    
    row2.append(citySearchDiv);
    row2.append(cityIndex);
    
    // Area of page where currentday and 5 day forecast will render
    var cityInfo = $("<div>").addClass("col-md-12 city-info");
    cityInfo.text("City Info :")
    cityForecast = $("<div>").addClass("col-md-12 city-forecast");
    cityForecast.text("City Forecast :")

    cityIndex.append(cityInfo);
    cityIndex.append(cityForecast);

    var searchCities = $("<button>");
        
    // Based on user input once search button is clicked generate button to toggle city index(currentWeather , 5 day forecast)
    searchBtnEl.on("click", function(){
        console.log("on click worked");
         searchCities.text(citySearchInput.val());
        allSearchedCitiesDiv.append(searchCities);
        console.log("It worked");
    });
    // On click on city button will render response data for cityInfo
    searchCities.on("click", function(){
         
        //  Create variable to caputure button value
        var city = searchCities.text();
        console.log(city);

        var key = "d7341b8b46766c6ab58b9ea3476b4103";
        // Then we want to grab api used to display response data with city location being button value
        var queryURL ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key;

         $.ajax({
            url:queryURL,
            method:"GET"
          }).then(function(response){
            console.log(response);
            // Display city, date, icon image, temp, humidity, wind speed and uv index using response and append to cityInfo
            var cityName = $("<h2>");
            var date = $("<div>");
            // Having trouble getting icon image to render
            // var iconImage = $("<img>").attr("src", response.weather.icon);
            var temp = $("<div>");
            var humidity = $("<div>");
            var windSpeed = $("<div>").addClass("border-bottom");

            cityName.text("City Name: " + response.name 
            // + iconImage
            );
            cityInfo.append(cityName);
            date.text("Current Date: " + moment().format("dddd, MMMM Do"));
            cityInfo.append(date);
            temp.text("Temperature: " + Math.floor((response.main.temp - 273.15) * 1.80 + 32) + " F");
            cityInfo.append(temp);
            humidity.text("Humidity: " + response.main.humidity+ " %");
            cityInfo.append(humidity);
            windSpeed.text("Wind Speed: " + response.wind.speed + " MPH");
            cityInfo.append(windSpeed);

            
          })
          var queryURL2 ="https://api.openweathermap.org/data/2.5/forecast/?q=" + city + "&APPID=" + key;
          $.ajax({
            url:queryURL2,
            method:"GET"
          }).then(function(response){
            console.log(response);
            // Display 5 day forecast
            getFiveDay(response);

            
            
          });
          return searchCities;
    });
}
creatElements();



// Get current City searched data



function getCityCurrent(){
    
}
// Get current city search 5 day
function getFiveDay(res){
    var fiveDay = [];

    for( var i = 0; i < res.list.length; i += 8){
        fiveDay.push(res.list[i])
         console.log(res.list[i]);
        
     }
    for(var j = 0; j < 5; j ++){
        var forecastDiv = $("<div>").addClass(" col-md-3 forecast-Div");
        // .attr("data-forecast");
        cityForecast.append(forecastDiv);
        // console.log('array', fiveDay)
        // console.log('i', i)
         forecastDiv.attr("data-date", fiveDay[j].dt_txt);
         forecastDiv.attr("data-temp", fiveDay[j].main.temp);
         forecastDiv.attr("data-humidity", fiveDay[j].main.humidity).addClass("border-bottom");
         console.log(forecastDiv)

         var pDay= $("<p>").text( "Date: " +fiveDay[j].dt_txt).addClass("date-p"); 
         var pHumidity= $("<p>").text("Humdity: " +fiveDay[j].main.humidity).addClass("humidity-p"); 
         var pTemp = $("<p>").text("Temp: " +Math.floor(fiveDay[j].main.temp - 273.15)* 1.80 + 32).addClass("temp-p");

         forecastDiv.append(pDay , pHumidity, pTemp);
    
    }
console.log(fiveDay);
}



