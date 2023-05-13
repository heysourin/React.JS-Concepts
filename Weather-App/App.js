import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    //FORECAST
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="max-w-6xl mx-auto my-5 font-medium">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data = {currentWeather}/>}
    </div>
  );
}

export default App;
