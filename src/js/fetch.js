// const fetch = require("node-fetch");

const apiKey = "9d04517f3c50b24e9da372b682d112d7";

const fetchCoordinates = async (city = "London") => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}`
    );
    const json = await response.json();
    return json.coord;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchWeather = async (
  latitude = 51.5085,
  longitude = -0.1257,
  units = "metric"
) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchCoordinates, fetchWeather };
