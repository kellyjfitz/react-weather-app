import React from "react";
import Icon from "./Icon";
import "./SmallWeather.css";
export default function SmallWeather(props) {
  //this is getting the day names for the sevenday forecast
  function getDayNames(timezone, date) {
    let day = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      timeZone: timezone,
      hc: "h24",
    }).format(date * 1000);
    return day;
  }

  if (props.unit === "celsius") {
    return (
      <div className="SmallWeather">
        {getDayNames(props.timeZone, props.date)}
        <br />
        <Icon icon={props.icon} />
        {Math.round(props.min)} / {Math.round(props.max)}
      </div>
    );
  } else {
    return (
      <div className="SmallWeather">
        {getDayNames(props.timeZone, props.date)}
        <br />
        <Icon icon={props.icon} />
        {Math.round(props.convert(props.min))} /{" "}
        {Math.round(props.convert(props.max))}
      </div>
    );
  }
}
