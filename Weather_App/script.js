const searchCity = document.querySelector(".search input");
const search_btn = document.querySelector(".search button")
const weather_img = document.querySelector(".weather_img")
const extra_info = document.querySelector(".extra_info")

// weather api key
const apiKey = "f07c69f74c524fbf989164625231703";
// weather api url
const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=";

async function checkWeather(searchCity) {
  const response = await fetch(apiUrl + searchCity + `&aqi=yes&key=${apiKey}`);
  var data = await response.json();

  document.querySelector(".location").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
  
  extra_info.style.display = "flex"
  
  weather_img.src = "https://"+data.current.condition.icon;

  console.log(data);
}

search_btn.addEventListener("click" , ()=>{

  checkWeather(searchCity.value);
})