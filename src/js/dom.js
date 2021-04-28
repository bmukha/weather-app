const renderWeather = async (weatherData) => {
  const info = await weatherData;
  const currentWeatherInfo = info.current;
  const currentWeatherWrapper = document.getElementById("current-weather");
  const currentWeatherPic = document.createElement("img");
  const {temp, humidity, pressure} = currentWeatherInfo;
  const currentWeatherContents = `<div id='current-temp'>${temp}℃</div>
  <div id='current-humidity'>${humidity}</div>
  <div id='current-pressure'>${pressure}</div>
  <img src='http://openweathermap.org/img/wn/${currentWeatherInfo.weather[0].icon}@2x.png' id='current-pic'><img>`
  currentWeatherWrapper.innerHTML = currentWeatherContents;
};

export default renderWeather;
