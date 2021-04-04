import renderWeather from "./dom";
import fetchWeather from "./fetch";

const initApp = () => {
  renderWeather(fetchWeather());
};

initApp();