


import Header from "./Header";
import Navbar from "./Navbar";
import NowForecast from "./NowForecast";
import WeatherConditions from "./WeatherConditions";

import "./styles.css";
import "./Navbar.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />

      <NowForecast />
      <WeatherConditions />
    </div>
  );
}

export default App;
