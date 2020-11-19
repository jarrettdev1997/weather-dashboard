

var getUserCity = function(city) {
    //format url to accept city name input 
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2e409b91144b4a52d9ccf84785e21a6d";

    //make request to url
    fetch(apiUrl).then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
    
  });
}

getUserCity("Philadelphia");