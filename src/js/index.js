import renderWeather from "./dom";
import { fetchWeather, fetchCoordinates, currentSettings } from "./fetch";

const initApp = async () => {
  const weatherData = await fetchWeather();
  renderWeather(weatherData);
};

const submitCityButton = document.getElementById("submitCityButton");
submitCityButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const cityInputText = document.getElementById("inputCityText").value;
  await fetchCoordinates(cityInputText);
  const weather = await fetchWeather();
  console.log(weather);
  renderWeather(weather);
});

const scaleToggle = document.getElementById("scaleToggle");
scaleToggle.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("celsius").classList.toggle("active");
  document.getElementById("fahrenheit").classList.toggle("active");
  currentSettings.units =
    currentSettings.units === "metric" ? "imperial" : "metric";
  initApp();
});

window.onload = () => {
  if (localStorage.getItem(currentSettings)) {
    currentSettings = JSON.parse(localStorage.getItem(currentSettings));
  }
};

window.onbeforeunload = () => {
  localStorage.setItem("currentSettings", JSON.stringify(currentSettings));
};

initApp();


// const getDayName = (time) => {
//   console.log (new Date(time).);
// }

// getDayName(1589220000);