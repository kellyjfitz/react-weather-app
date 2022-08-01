import React, {useState} from "react";
import axios from "axios";
import Header from "./Header";

import NowForecast from "./NowForecast";
import WeatherConditions from "./WeatherConditions";

export default function Weather (){
const [city, setCity] = useState ("Sydney, Australia");
const [data, setData] = useState ({ready: false});
let apiKey = "455ff7a875e64ce21b9d171eb2a50c93";
  let apiUrlCoord = "https://api.openweathermap.org/geo/1.0/direct?q=";
  let apiUrlWeather = "https://api.openweathermap.org/data/2.5/onecall?";

  function setWeather (response) {
setData ({ready:true, 
    currentTemp: response.data.current.temp, 
    todayMin: response.data.daily[0].temp.min, 
    todayMax: response.data.daily[0].temp.max,
    outlook: response.data.current.weather[0].main,
    description: response.data.current.weather[0].description,
    wind: (3.6 * response.data.current.wind_speed),
    humidity: response.data.current.humidity,
    uv: response.data.daily[0].uvi,
chanceRain: (response.data.daily[0].pop * 100),
rain: response.data.daily[0].rain,
timeZone: response.data.timezone,
sunrise: response.data.daily[0].sunrise,
sunset: response.data.daily[0].sunset,
weather: response.data.daily  })
}

  if ( data.ready ) 
  { return (
      <div>
        <Header city={city}/>
        <NowForecast data={data} />
        <WeatherConditions data={data} />
      </div>
    )
  } else
  { 
    axios
  .get(
    `${apiUrlWeather}lat=-33.8688&lon=151.2093&appid=${apiKey}&units=metric`
  )
  .then(setWeather);
    return "loading ..."
//   The below sends coordinates for Sydney, Australia to the api
  
}
}
