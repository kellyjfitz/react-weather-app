import React, { useState} from "react";
import axios from "axios";
import "./CityInputForm.css";

export default function CityInputForm() {

 let apiKey = "455ff7a875e64ce21b9d171eb2a50c93";
  let apiUrlCoord = "https://api.openweathermap.org/geo/1.0/direct?q=";
  let apiUrlWeather = "https://api.openweathermap.org/data/2.5/onecall?";


  const [city, setCity] = useState ("Sydney");
  function updateCity (event) {
    setCity(event.target.value);
    console.log(city);
  }

  function sendCityCoordinates(response) {
    let lat = response.data[0].lat;
    let lon = response.data[0].lon
    console.log (lat);
    console.log(lon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`${apiUrlCoord}${city}&appid=${apiKey}`)
      .then(sendCityCoordinates);
  }

    return (
    <div className="CityInputForm">
      <form className="d-flex" id="city-search" autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            onChange={updateCity}
            className="form-control me-2"
            id="city-input"
            placeholder="Change city"
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
            >
              <i className="fa-solid fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
