import { currentSettings } from "./fetch";

const currentScaleDisplay = () =>
  currentSettings.units === "metric" ? "℃" : "℉";

const DailyWeather = (
  temperature,
  humidity,
  pressure,
  pic
) => `<div class="daily-wrapper">
  <div class='temperature'>Темп: ${temperature + currentScaleDisplay()}</div>
  <div class='humidity'>Вол: ${humidity}%</div>
  <div class='pressure'>Тиск: ${pressure}мм.рт.ст.</div>
  <img src='http://openweathermap.org/img/wn/${pic}.png' class='daily-pic'><img>
</div> 
`;

const renderWeather = async (weatherData) => {
  try {
    const currentWeatherWrapper = document.getElementById("current-weather");
    const dailyWeatherWrapper = document.getElementById("daily-weather");
    const info = await weatherData;
    const currentWeatherInfo = info.current;
    const { temp, humidity, pressure } = currentWeatherInfo;
    document.getElementById("cityDisplay").innerText = currentSettings.city;
    const currentWeatherContents = `<div id='current-temp'> Температура:<br>
    <span id='currtemp'>${Math.round(temp) + currentScaleDisplay()}</span>
    </div>
  <div id='current-humidity'>Вологість:<br>${Math.round(humidity)}%</div>
  <div id='current-pressure'>Тиск:<br>${Math.round(pressure)}мм.рт.ст.</div>
  <img src='http://openweathermap.org/img/wn/${
    currentWeatherInfo.weather[0].icon
  }@2x.png' id='current-pic'><img>`;
    currentWeatherWrapper.innerHTML = currentWeatherContents;
    let dailyWeatherContents = "";
    const dailyWeatherInfo = info.daily;
    for (let i = 1; i < dailyWeatherInfo.length - 1; i++) {
      dailyWeatherContents += DailyWeather(
        Math.round(dailyWeatherInfo[i].temp.day),
        Math.round(dailyWeatherInfo[i].humidity),
        Math.round(dailyWeatherInfo[i].pressure),
        dailyWeatherInfo[i].weather[0].icon
      );
    }

    dailyWeatherWrapper.innerHTML = dailyWeatherContents;
  } catch (error) {
    const currentWeatherWrapper = document.getElementById("current-weather");
    const dailyWeatherWrapper = document.getElementById("daily-weather");
    currentWeatherWrapper.innerHTML = "";
    dailyWeatherWrapper.innerHTML = "";
  }
};

export default renderWeather;
