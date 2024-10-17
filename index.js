const apiKey = "75d1b4e9cc61a705ffc04018d12edd71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        document.querySelector(".error").style.display = "none";
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "weather-app-images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "weather-app-images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "weather-app-images/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "weather-app-images/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "weather-app-images/drizzle.png";
        }

        document.querySelector(".weather").style.display = "block"
    }

}

searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);
})

