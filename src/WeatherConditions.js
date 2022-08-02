import React from "react";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherConditions forecast">
      <p>
        <span role="img" aria-label="umbrella">
          ☔
        </span>{" "}
        Chance of rain: {props.data.chanceRain}% 🌧️ Rain: {props.data.rain === undefined ? 0 : props.data.rain}mm
        <br />
        <span role="img" aria-label="wind">
          💨 Wind
        </span>
        : {Math.round(props.data.wind)}km/h{" "}
        <span role="img" aria-label="sun">
          ☀️
        </span>{" "}
        UV index: {props.data.uv}{" "}
        <span role="img" aria-label="sweat">
          💦
        </span>{" "}
        Humidity: {props.data.humidity}%
      </p>
    </div>
  );
}
