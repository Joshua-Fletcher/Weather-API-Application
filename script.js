const API_KEY = "a850bc74fecc57471f9fb10ce06a5bb4";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
var city;
var data;
var request_url;

function getCity() {
    city = document.getElementById("cityRequest").value;
    apiCall(city);
}
function apiCall(city) {
    request_url = BASE_URL + "?q=" + city + "&appid=" + API_KEY;
    let request = new XMLHttpRequest();
    
    request.open("GET", request_url);
    request.responseType = "json";
    
    request.onload = () => {
        if(request.status === 200) {
            var data = request.response;
            //temperature
            var temp = data["main"]["temp"];
            //Overall weather (Ex: cloudy,sunny,etc)
            var desc = data["weather"][0]["description"];
            //County
            var country = data["sys"]["country"];
            //wind speed
            var windSpeed = data["wind"]["speed"];
            //feels like
            var feelsLike = data["main"]["feels_like"];
            //humidity
            var humidity = data["main"]["humidity"];

            //icon
            //document.getElementById("testimg").innerHTML = data["weather"][0]["icon"];


            document.getElementById("test").innerHTML = humidity;
            
        }
        else {
            console.log("Error");
            alert("Error");
        }
    };
    request.send();
}
