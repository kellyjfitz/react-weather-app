import React from "react";
export default function DateInfo(props) {
  const now = new Date();

  function getDestinationTime(timezone) {
    //this one gets the time at destination - the same place as the weather
    let destinationTime = new Intl.DateTimeFormat("en-GB", {
      timeStyle: "short",
      timeZone: timezone,
      hc: "h24",
    }).format(now);
    return destinationTime;
  }

  function getDestinationDate(timezone) {
    //this one is US format so it will display the date in the h2 as month, date
    let destinationDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: timezone,
    }).format(now);
    return destinationDate;
  }

  return (
    <h2>
      <small>Local time: {getDestinationTime(props.timeZone)}</small>
      <br />
      <span id="date">{getDestinationDate(props.timeZone)}</span>
    </h2>
  );
}
