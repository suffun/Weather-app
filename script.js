const input = document.getElementById("city");
const button = document.getElementById("search");
const weatherBox = document.getElementById("weather");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");

const API_KEY = "9865b4d9a0d1d489b28535ce71035ff2";
button.addEventListener("click", () => {
  const city = input.value.trim();
  if (city === "") return;

  getWeather(city);
});

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    showWeather(data);
  } catch (error) {
    alert("Something went wrong");
  }
}

function showWeather(data) {
  cityName.innerText = data.name;
  temperature.innerText = `${Math.round(data.main.temp)}°C`;
  condition.innerText = data.weather[0].main;

  weatherBox.style.display = "block";
}
