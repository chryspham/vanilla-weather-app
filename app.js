function getTime(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}`;
}

function getTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#numTemp");
  tempElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelectorAll("#cityName");
  cityElement.innerHTML = response.data.main.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].main;

  let displayTime = document.querySelector("#displayTime");
  displayTime.innerHTML = getTime(response.data.dt * 1000);

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = response.data.wind.speed;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getTemperature);
