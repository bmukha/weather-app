import renderWeather from "./dom";
import { fetchWeather, fetchCoordinates } from "./fetch";

// const initApp = () => {
//   renderWeather(fetchWeather());
// };

const submitCityButton = document.getElementById("submitCityButton");
submitCityButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const cityInputText = document.getElementById("cityInputText").value;
  const coordinates = await fetchCoordinates(cityInputText);
  const weather = await fetchWeather(coordinates.lat, coordinates.lon);
  console.log(weather);
});

// initApp();
