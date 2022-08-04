import React, { useState } from "react";
import MainIcon from "./MainIcon";
import BigTemp from "./BigTemp";
import TempConvert from "./TempConvert";

import "./NowForecast.css";

export default function NowForecast(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(temp) {
    let fahrenheit = (temp * 9) / 5 + 32;
    return fahrenheit;
  }
  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  return (
    <div className="NowForecast row">
      <div className="col">
        <div className="row">
          <div className="col-test">
            <p>Now</p>

            <MainIcon icon={props.data.outlook} />
          </div>
          <div className="col">
            <BigTemp
              temp={props.data.currentTemp}
              convert={showFahrenheit}
              unit={unit}
            />
            {unit === "celsius" ? (
              <span className="convert">
                {" "}
                <a href="./" onClick={showF}>
                  C
                </a>{" "}
                | F
              </span>
            ) : (
              <span className="convert">
                {" "}
                C |{" "}
                <a href="./" onClick={showC}>
                  F
                </a>
              </span>
            )}

            <p>{props.data.outlook}</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <p>Today</p>
            <MainIcon icon={props.data.dayOutlook} />
          </div>
          <div className="col">
            <span className="min-max">Min</span>{" "}
            <BigTemp
              temp={props.data.todayMin}
              convert={showFahrenheit}
              unit={unit}
            />
            <br />
            <span className="min-max">Max</span>{" "}
            <BigTemp
              temp={props.data.todayMax}
              convert={showFahrenheit}
              unit={unit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
