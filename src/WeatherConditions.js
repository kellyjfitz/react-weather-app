import React from "react";

export default function WeatherConditions() {
  return (
    <div className="WeatherConditions forecast">
      <p>
        <span role="img" aria-label="umbrella">
          ☔
        </span>{" "}
        Chance of rain: 2% 🌧️ Rain: 0mm
        <br />
        <span role="img" aria-label="wind">
          💨 Wind
        </span>
        : 5km/h{" "}
        <span role="img" aria-label="sun">
          ☀️
        </span>{" "}
        UV index: 6.3 high{" "}
        <span role="img" aria-label="sweat">
          💦
        </span>{" "}
        Humidity: 93%
      </p>
    </div>
  );
}
