const renderWeather = async (weatherData) => {
  const info = await weatherData;
  const body = document.body;
  body.textContent = info.weather[0].main;
  console.log(info);
};

export default renderWeather;
