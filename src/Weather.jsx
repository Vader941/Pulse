import React, {useEffect, useState} from "react";

function getWeatherIcon(code) {
  const icons = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    53: "🌦️",
    55: "🌧️",
    61: "🌧️",
    63: "🌧️",
    65: "🌧️",
    71: "❄️",
    73: "🌨️",
    75: "❄️",
    80: "🌧️",
    81: "🌧️",
    82: "🌧️",
    95: "⛈️",
    96: "⛈️",
    99: "⛈️",
  };

  return icons[code] || "❓";
}

function getWeatherDescription(code) {
  const codes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Moderate showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with heavy hail"
  };

  return codes[code] || "Unknown";
}

function toFahrenheit(celsius){
    return(celsius *9) /5 + 32;
}

function Weather() {
  const [weather, setWeather] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m,weather_code")
      .then(res => res.json())
      .then(data => {
        setWeather(data.current);
      });
  }, []);

if (!weather){
    return <p>Loading weather...</p>;
}

return (
    <div>
        <h2 className="text-2xl font-bold mb-2">Current Weather</h2>
        <p className="text-lg">
            Temperature:{" "}
            {isFahrenheit
                ? `${toFahrenheit(weather.temperature_2m).toFixed(1)}°F`
                : `${weather.temperature_2m}°C`}
        </p>
        <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setIsFahrenheit(!isFahrenheit)}
        >
        Show in {isFahrenheit ? "Celsius" : "Fahrenheit"}
        </button>

        <p className="text-lg flex items-center gap-2">
        <span>{getWeatherIcon(weather.weather_code)}</span>
        <span>{getWeatherDescription(weather.weather_code)}</span>
        </p>

       
    </div>
);
}

export default Weather;