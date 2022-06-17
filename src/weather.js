import React, { useState } from "react";
import axios from "axios";
import Icons from "./icons";

export default function Weather(props) {
  const [temp, setTemp] = useState(null);
  let [status, setStatus] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function handleWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setStatus(response.data.weather[0].description);
    setWind(Math.round(response.data.wind.speed));
    setIcon(<Icons stat={response.data.weather[0].icon} />);
  }

  let appId = "90752b41f27333ec27018bf17cc38b4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${appId}&units=metric`;
  axios.get(url).then(handleWeather);

  return (
    <ul>
      <li>Temperature: {temp}°C</li>
      <li>status: {status}</li>
      <li>Humidity: {humidity}</li>
      <li>Wind Speed:{wind}</li>
      <Icons value={icon} />
    </ul>
  );
}
