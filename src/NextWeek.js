import React from "react";
import SmallWeather from "./SmallWeather";

export default function NextWeek(props) {
  return (
    <div className="NextWeek">
      <h2>The next seven days</h2>
      <div className="SmallWeathers">
        <SmallWeather
          icon={props.data[1].weather[0].main}
          min={props.data[1].temp.min}
          max={props.data[1].temp.max}
          timeZone={props.timeZone}
          date={props.data[1].dt}
          convert={props.convert}
          unit={props.unit}
        />
        <SmallWeather
          icon={props.data[2].weather[0].main}
          min={props.data[2].temp.min}
          max={props.data[2].temp.max}
          timeZone={props.timeZone}
          date={props.data[2].dt}
          convert={props.convert}
          unit={props.unit}
        />
        <SmallWeather
          icon={props.data[3].weather[0].main}
          min={props.data[3].temp.min}
          max={props.data[3].temp.max}
          timeZone={props.timeZone}
          date={props.data[3].dt}
          convert={props.convert}
          unit={props.unit}
        />
        <SmallWeather
          icon={props.data[4].weather[0].main}
          min={props.data[4].temp.min}
          max={props.data[4].temp.max}
          timeZone={props.timeZone}
          date={props.data[4].dt}
          convert={props.convert}
          unit={props.unit}
        />
        <SmallWeather
          icon={props.data[5].weather[0].main}
          min={props.data[5].temp.min}
          max={props.data[5].temp.max}
          timeZone={props.timeZone}
          date={props.data[5].dt}
          convert={props.convert}
          unit={props.unit}
        />
        <SmallWeather
          icon={props.data[6].weather[0].main}
          min={props.data[6].temp.min}
          max={props.data[6].temp.max}
          timeZone={props.timeZone}
          date={props.data[6].dt}
          convert={props.convert}
          unit={props.unit}
        />
        <SmallWeather
          icon={props.data[7].weather[0].main}
          min={props.data[7].temp.min}
          max={props.data[7].temp.max}
          timeZone={props.timeZone}
          date={props.data[7].dt}
          convert={props.convert}
          unit={props.unit}
        />
      </div>
    </div>
  );
}
