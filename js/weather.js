
import{
    API_KEY
}from './key.js';


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const today = data.weather[0].main;
            const weatherH1 = document.querySelector("#weather h1");
            weatherH1.innerText = data.weather[0].main;
            const temp = document.querySelector("#weather span:nth-child(2)");
            temp.innerText = Math.floor(data.main.temp - 273.15) + "℃";
            const region = document.querySelector("#weather span:nth-child(3)");
            region.innerText = data.name;

            const link =  document.location.pathname;
            if(link != "/Clear.html" && today == "Clear"){
                location.replace("./clearl");
            }else if(link != "/Clouds.html" && today == "Clouds"){
                location.replace("./clouds");
            }else if(link != "/Rain.html" && today == "Rain"){
                location.replace("./rain");
            }else if(link != "/Snow.html" && today == "Snow"){
                location.replace("./snow");
            }else {
                return;
            }
            
        })
}

function onGeoError() {
    alert("error");
    console.log("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);