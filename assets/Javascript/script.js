var searchWeather = function(city){
    var queryURL = 'api.openweathermap.org/data/2.5/weather?q='+ city +' &APPID=f0a6c63cca981217d4cbd25627324a7b'

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response)
    });
};

console.log(searchWeather('London'))