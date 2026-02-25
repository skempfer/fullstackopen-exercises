import { useEffect, useState } from 'react';
import weatherService from '../services/weather';

const WeatherDetails = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if (!capital || !apiKey) {
      setWeather(null);
      setWeatherError(null);
      return;
    }

    weatherService
      .getByCity(capital, apiKey)
      .then((data) => {
        setWeather(data);
        setWeatherError(null);
      })
      .catch(() => {
        setWeather(null);
        setWeatherError('Could not load weather data');
      });
  }, [capital, apiKey]);

  return (
    <div>
      <h3>Weather in {capital || 'N/A'}</h3>
      {!apiKey && <p>Weather API key missing</p>}
      {apiKey && !capital && <p>Capital not available</p>}
      {apiKey && capital && !weather && !weatherError && <p>Loading weather...</p>}
      {weatherError && <p>{weatherError}</p>}
      {weather && (
        <div>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
          <p>Weather: {weather.weather?.[0]?.description || 'N/A'}</p>
          <p>Wind: {weather.wind?.speed} m/s</p>
          {weather.weather?.[0]?.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather?.[0]?.description || 'Weather icon'}
              width="80"
              height="80"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
