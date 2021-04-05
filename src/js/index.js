import renderWeather from "./dom";
import { fetchWeather, fetchCoordinates } from "./fetch";

const initApp = () => {
  renderWeather(fetchWeather());
};

const submitCityButton = document.getElementById("submitCityButton");
submitCityButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cityInputText = document.getElementById("cityInputText").value;
  fetchCoordinates(cityInputText).then((coords) => {
    fetchWeather(coords.lat, coords.lon).then((weather) =>
      console.log(weather)
    );
  });
});

// initApp();
