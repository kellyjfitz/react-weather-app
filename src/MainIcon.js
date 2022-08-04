import React from "react";

export default function MainIcon(props) {
  return (
    <h3>
      {props.icon === "Clouds"
        ? "☁️"
        : props.icon === "Snow"
        ? "️️️️️️❄️"
        : props.icon === "Rain" || props.weather === "Drizzle"
        ? "🌧️"
        : props.icon === "Thunderstorm"
        ? "🌩️️️️️️️️️"
        : props.icon === "Mist" ||
          props.icon === "Fog" ||
          props.icon === "Smoke" ||
          props.icon === "Haze" ||
          props.icon === "Dust" ||
          props.icon === "Sand" ||
          props.icon === "Ash"
        ? "️️️️️️️️️️️️️️️🌫️"
        : props.icon === "Squall" || props.weather === "Tornado"
        ? "🌪️"
        : "☀️"}
    </h3>
  );
}
