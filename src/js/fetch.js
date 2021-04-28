// const fetch = require("node-fetch");

const apiKey = "9d04517f3c50b24e9da372b682d112d7";

const currentSettings = {
  lat: 48.9215,
  lon: 24.7097,
  units: "metric",
};

const fetchCoordinates = async (city = "Ivano-Frankivsk") => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    const json = await response.json();
    currentSettings.lat = json.coord.lat;
    currentSettings.lon = json.coord.lon;
  } catch (error) {
    console.error(error.message);
  }
};

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${currentSettings.lat}&lon=${currentSettings.lon}&exclude=minutely,hourly,alerts&units=${currentSettings.units}&appid=${apiKey}`
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

export { fetchCoordinates, fetchWeather, currentSettings };
