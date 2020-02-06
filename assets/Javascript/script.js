
var weatherImg = document.querySelector('#weatherImg');
var cityName = document.querySelector('#city-name');
var tempF = document.querySelector('#tempF');
var submit = document.querySelector('#submitWeather')
var searchInput = document.querySelector('#searchInput').value

var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+searchInput+'&APPID=f0a6c63cca981217d4cbd25627324a7b'

submit.click(function(){
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response)
    })
});