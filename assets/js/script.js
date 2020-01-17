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
    var citySearchDiv = $("<div>").addClass("col-md-3 border border-primary city-search-div");
    citySearchDiv.text("Search For a City : ")
    // Input area for user to type city of choice
    var citySearch = $("<input>");
    citySearch.attr("type","text");
    // Button to click which will later have event-listener
    var searchBtnEl = $("<button>").addClass("btn btn-info");
    searchBtnEl.text("Search");
    
    citySearchDiv.append(citySearch);
    citySearchDiv.append(searchBtnEl);

    // Area of page where 
    var cityIndex = $("<div>").addClass("col-md-8 border border-primary city-index");

    row2.append(citySearchDiv);
    row2.append(cityIndex);

    var cityInfo = $("<div>").addClass("col-md-12 city-info");
    cityInfo.text("City Info :")
    var cityForecast = $("<div>").addClass("col-md-12 city-forecast");
    cityForecast.text("City Forecast :")

    cityIndex.append(cityInfo);
    cityIndex.append(cityForecast);

    
    
}

creatElements();

