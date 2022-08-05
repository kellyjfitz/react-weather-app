import React from "react";

export default function WeatherConditions(props) {
  //this is used for the sunrise and sunset times, to convert them to a real time,
  //then also the time at destination
  function sunTimes(time, timezone) {
    let sunTime = new Intl.DateTimeFormat("en-GB", {
      timeStyle: "short",
      timeZone: timezone,
      hc: "h24",
    }).format(time * 1000);
    return sunTime;
  }

  return (
    <div className="WeatherConditions">
      <p>
        <span role="img" aria-label="happy sun">
          🌞
        </span>{" "}
        Sunrise: {sunTimes(props.data.sunrise, props.data.timeZone)}
        <span role="img" aria-label="happy moon">
          {" "}
          🌚
        </span>{" "}
        Sunset: {sunTimes(props.data.sunset, props.data.timeZone)}
        <br />
        <span role="img" aria-label="umbrella">
          ☔
        </span>{" "}
        Chance of rain: {props.data.chanceRain}% 🌧️ Rain:{" "}
        {props.data.rain === undefined ? 0 : props.data.rain}mm
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
