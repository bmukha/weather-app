// const fetch = require("node-fetch");

const fetchWeather = async () => {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9d04517f3c50b24e9da372b682d112d7"
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
};


export default fetchWeather;
