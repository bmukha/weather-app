import renderWeather from "./dom";
import { fetchWeather, fetchCoordinates } from "./fetch";

const initApp = () => {
  renderWeather(fetchWeather());
};

initApp();
