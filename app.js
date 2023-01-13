function getTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#numTemp");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelectorAll("#cityName");
  cityElement.innerHTML = response.data.main.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].main;
}

let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getTemperature);
