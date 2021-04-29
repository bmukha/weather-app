const DailyWeather = (
  temperature,
  humidity,
  pressure,
  pic
) => `<div class="daily-wrapper">
  <div class='temperature'>Темп: ${temperature}℃</div>
  <div class='humidity'>Вол: ${humidity}</div>
  <div class='pressure'>Тиск: ${pressure}</div>
  <img src='http://openweathermap.org/img/wn/${pic}.png' id='current-pic'><img>
</div> 
`;

const renderWeather = async (weatherData) => {
  const info = await weatherData;
  const currentWeatherInfo = info.current;
  const currentWeatherWrapper = document.getElementById("current-weather");
  const { temp, humidity, pressure } = currentWeatherInfo;
  const currentWeatherContents = `<div id='current-temp'>${Math.round(temp)}℃</div>
  <div id='current-humidity'>${Math.round(humidity)}</div>
  <div id='current-pressure'>${Math.round(pressure)}</div>
  <img src='http://openweathermap.org/img/wn/${currentWeatherInfo.weather[0].icon}@2x.png' id='current-pic'><img>`;
  currentWeatherWrapper.innerHTML = currentWeatherContents;

  const dailyWeatherWrapper = document.getElementById("daily-weather");
  let dailyWeatherContents = "";
  const dailyWeatherInfo = info.daily;
  for (let i = 0; i < dailyWeatherInfo.length; i++) {
    dailyWeatherContents += DailyWeather(
      Math.round(dailyWeatherInfo[i].temp.day),
      Math.round(dailyWeatherInfo[i].humidity),
      Math.round(dailyWeatherInfo[i].pressure),
      dailyWeatherInfo[i].weather[0].icon
    );
  }

  dailyWeatherWrapper.innerHTML = dailyWeatherContents;
};

export default renderWeather;
