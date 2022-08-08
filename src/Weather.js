import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

import NowForecast from "./NowForecast";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState({
    name: "Sydney",
    country: "AU",
    lat: -33.8688,
    lon: 151.2093,
  });
  const [input, setInput] = useState("");
  const [data, setData] = useState({ ready: false });

  let apiKey = "455ff7a875e64ce21b9d171eb2a50c93";
  let apiUrlCoord = "https://api.openweathermap.org/geo/1.0/direct?q=";
  let apiUrlWeather = "https://api.openweathermap.org/data/2.5/onecall?";

  // this takes the data from the onecall api and puts it into the data object
  function setWeather(response) {
   
    setData({
      ready: true,
      currentTemp: response.data.current.temp,
      todayMin: response.data.daily[0].temp.min,
      todayMax: response.data.daily[0].temp.max,
      outlook: response.data.current.weather[0].main,
      description: response.data.current.weather[0].description,
      wind: 3.6 * response.data.current.wind_speed,
      humidity: response.data.current.humidity,
      uv: response.data.daily[0].uvi,
      chanceRain: response.data.daily[0].pop * 100,
      rain: response.data.daily[0].rain,
      timeZone: response.data.timezone,
      sunrise: response.data.daily[0].sunrise,
      sunset: response.data.daily[0].sunset,
      dayOutlook: response.data.daily[0].weather[0].main,
      weekForecast: response.data.daily,
    });
  }

  // this gets the coordinates of the current location
  function clickLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiUrl3 = "https://api.openweathermap.org/geo/1.0/reverse?";

      axios
        .get(
          `${apiUrl3}lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=${apiKey}`
        )
        .then(sendCityCoordinates);
    });
  }

  // this gets the form input and sets it to the input variable
  function handleInput(event) {
    setInput(event.target.value);
  }

  //this runs after the form input has been sent to the geolocation api and SHOULD update the lon and lat and send them to the onecall api
  function sendCityCoordinates(response) {
    setCity({
      name: response.data[0].name,
      country: response.data[0].country,
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    });

    axios
      .get(
        `${apiUrlWeather}lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`
      )
      .then(setWeather);
  }

  //when the form is submitted, this grabs the form input and sends it to the geolocation api to get the lat and lon
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`${apiUrlCoord}${input}&appid=${apiKey}`)
      .then(sendCityCoordinates);
  }

  if (data.ready) {
    return (
      <div>
        <form
          className="d-flex"
          id="city-search"
          autoComplete="off"
          
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input
              type="search"
              onChange={handleInput}
              className="form-control me-2"
              id="city-input"
              placeholder="Change city"
              autoFocus="on"
              aria-label="Search for a city to change selection"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary me-2"
                id="city-submit"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <button
                className="btn btn-outline-secondary"
                id="current-location"
                type="button"
                onClick={clickLocation}
              >
                <i className="fa-solid fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </form>
        <Header city={city.name} country={city.country} data={data} />
        <NowForecast data={data} />
      </div>
    );
  } else {
    axios
      .get(
        `${apiUrlWeather}lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`
      )
      .then(setWeather);
    return "Weather is loading ...";
  }
}
