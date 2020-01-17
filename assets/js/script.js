var container = $(".container");

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
    var citySearchDiv = $("<div>").addClass("col-md-12 city-search-div");
    citySearchDiv.text("Search For a City : ")
    // Input area for user to type city of choice
    var citySearch = $("<input>");
    citySearch.attr("type","text");
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
    
    citySearchDiv.append(citySearch);
    citySearchDiv.append(searchBtnEl);
    citySearchDiv.append(allSearchedCitiesDiv);

    var cityIndex = $("<div>").addClass("col-md-12 city-index");
    
    row2.append(citySearchDiv);
    row2.append(cityIndex);
    
    // Area of page where currentday and 5 day forecast will render
    var cityInfo = $("<div>").addClass("col-md-12 city-info");
    cityInfo.text("City Info :")
    var cityForecast = $("<div>").addClass("col-md-12 city-forecast");
    cityForecast.text("City Forecast :")

    cityIndex.append(cityInfo);
    cityIndex.append(cityForecast);

    var searchCities = $("<button>");
        
    // Based on user input once search button is clicked generate button to toggle city index(currentWeather , 5 day forecast)
    searchBtnEl.on("click", function(){
        console.log("on click worked");
         searchCities.text(citySearch.val());
        allSearchedCitiesDiv.append(searchCities);
        console.log("It worked");
    });
    // On click on city button will render response data for cityInfo
    searchCities.on("click", function(){
         
        //  Create variable to caputure button value
        var city = JSON.stringify(searchCities.val());

        var key = "d7341b8b46766c6ab58b9ea3476b4103";
        // Then we want to grab api used to display response data with city location being button value
        var queryURL ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key;

         $.ajax({
            url:queryURL,
            method:"GET"
          }).then(function(response){
            console.log(response);
          })
    });
}
creatElements();



// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
// Get current City searched data



function getCityCurrent(){
    
}
// Get current city search 5 day
function getFiveDay(){

}


