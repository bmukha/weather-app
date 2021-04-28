const renderWeather = async (weatherData) => {
  const info = await weatherData;
  const currentWeatherInfo = info.current.weather[0];
  console.log(currentWeatherInfo);
  const current = document.getElementById("current-weather");
  const currentWeatherPic = document.createElement("img");
  // const currentWeather
  currentWeatherPic.src = `http://openweathermap.org/img/wn/${currentWeatherInfo.icon}@2x.png`;
  current.appendChild(currentWeatherPic);
};

export default renderWeather;
