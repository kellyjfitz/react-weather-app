import React from "react";
import MainIcon from "./MainIcon";
import BigTemp from "./BigTemp";
import TempConvert from "./TempConvert";
import NowWeather from "./NowWeather";
import "./NowForecast.css";

export default function NowForecast(props) {
  return (
    <div className="NowForecast row">
      <div className="col">
        <div className="row">
          <div className="col-test">
            <p>Now</p>

            <MainIcon icon="⛅" />
          </div>
          <div className="col">
            <BigTemp temp={props.data.currentTemp} />
            <TempConvert />
            <NowWeather weather={props.data.outlook} />
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
            <span className="min-max">Min</span> <BigTemp temp={props.data.todayMin} />
            <br />
            <span className="min-max">Max</span> <BigTemp temp={props.data.todayMax} />
          </div>
        </div>
      </div>
    </div>
  );
}
