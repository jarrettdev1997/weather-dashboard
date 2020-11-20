var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var citySearchTerm = document.querySelector("#city-search-term");


var getUserCity = function(city) {
    //format url to accept city name input 
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2e409b91144b4a52d9ccf84785e21a6d";

    //make request to url
    fetch(apiUrl).then(function(response){
    response.json().then(function(data){
        displayWeather(data, city);
    });
    
  });
};

var citySearchHandler = function(e){
    e.preventDefault();
    //console.log(e);

    //get value from input
    var city = cityInputEl.value.trim();

    if (city) {
        getUserCity(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city")
    }
};

var displayWeather = function(weather, cityName) {
    //console.log(weather);
    //console.log(cityName);

    // check if api returned any weather data
    if (weather.length === 0) {
        citySearchTerm.textContent = "No weather data found.";
        return;
    }

    // clears old content
    weatherContainerEl.textContent = "";
    citySearchTerm.textContent = cityName


};

getUserCity("city");

// event listeners
searchFormEl.addEventListener("submit", citySearchHandler);