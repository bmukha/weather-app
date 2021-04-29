import renderWeather from "./dom";
import { fetchWeather, fetchCoordinates } from "./fetch";

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

initApp();
