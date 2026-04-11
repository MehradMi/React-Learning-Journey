import { useState, useEffect } from "react";
import "./index.css";

const KEY = "5e8fe1291655457f98c192536260904"; // I KNOW KEY SHOULD NOT BE HERE BUT IT'S WEATHER API (Who Cares?)

function App() {
  const [city, setCity] = useState("New-York");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`,
        );
        const data = await res.json();
        if (data.error) {
          setError(data.error.message);
					setWeatherData(null);
					return;
        }
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      }
    }
    getData();
  }, [city]);

  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter city name"
              className="search-input"
              value={city}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="weather-card">
          <h2>{`${weatherData?.location.name}, ${weatherData?.location.country}`}</h2>
          <img
            src={`https://${weatherData?.current?.condition?.icon}`}
            alt="icon"
            className="weather-icon"
          />
          <p className="temperature">
            {Math.round(weatherData?.current?.temp_c)}°C
          </p>
          <p className="condition">{weatherData?.current?.condition?.text}</p>
          <div className="weather-details">
            <p>Humidity: {Math.round(weatherData?.current?.humidity)}%</p>
            <p>Wind: {Math.round(weatherData?.current?.wind_kph)} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
