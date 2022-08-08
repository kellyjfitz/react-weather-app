import React from "react";
import SmallWeather from "./SmallWeather";

export default function NextWeek(props) {
  return (
    <div className="NextWeek">
      <h2>The next seven days</h2>
      <div className="SmallWeathers">
        {props.data.map(function (forecast, index) {
          if (index > 0) {
            return (
              <SmallWeather
                icon={forecast.weather[0].main}
                min={forecast.temp.min}
                max={forecast.temp.max}
                date={forecast.dt}
                timeZone={props.timeZone}
                convert={props.convert}
                unit={props.unit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
