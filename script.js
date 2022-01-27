const API_KEY = "a850bc74fecc57471f9fb10ce06a5bb4";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
var city;
var data;
var request_url;

document.querySelector(".cityRequest").addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        getCity();
    }
});

function getCity() {
    
    city = document.querySelector(".cityRequest").value;
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
            //city
            document.querySelector(".city").innerText = "Weather in " + data["name"];
            //temperature
            document.querySelector(".temp").innerText = Math.round(data["main"]["temp"] - 273.15) + "°C";
            //Overall weather (Ex: cloudy,sunny,etc)
            document.querySelector(".desc").innerText = data["weather"][0]["description"];
            //County
            country = data["sys"]["country"];
            //wind speed
            document.querySelector(".wind").innerText = "Wind speed: " + data["wind"]["speed"] + " km/h";
            //feels like
            feelsLike = data["main"]["feels_like"];
            //humidity
            document.querySelector(".humidity").innerText = "Humidity: " + data["main"]["humidity"] + "%";
            //main weather description
            var mainDesc = data["weather"][0]["main"];

            //icon
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data["weather"][0]["icon"] + ".png";
            
            document.querySelector(".card").style = "height: 40%";
  

            var cloud = document.getElementById("#container");

            
        }
        else {
            console.log("Error");
            alert("Error");
        }
    };
    request.send();
}
