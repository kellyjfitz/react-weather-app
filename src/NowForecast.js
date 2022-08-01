import React from "react";
import MainIcon from "./MainIcon";
import BigTemp from "./BigTemp";
import TempConvert from "./TempConvert";
import NowWeather from "./NowWeather";
import "./NowForecast.css";

export default function NowForecast() {
  return (
    <div className="NowForecast row">
      <div className="col">
        <div className="row">
          <div className="col-test">
            <p>Now</p>

            <MainIcon icon="⛅" />
          </div>
          <div className="col">
            <BigTemp temp={11} />
            <TempConvert />
            <NowWeather weather="Cloudy" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <p>Today</p>
            <MainIcon icon="⛅" />
          </div>
          <div className="col">
            <span className="min-max">Min</span> <BigTemp temp={11} />
            <br />
            <span className="min-max">Max</span> <BigTemp temp={11} />
          </div>
        </div>
      </div>
    </div>
  );
}
