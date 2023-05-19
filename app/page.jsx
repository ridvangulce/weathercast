"use client";
import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import axios from "axios";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=istanbul&lang=tr&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
      setCity("");
      setLoading(false)
    })
  }

  return (
    <div>
      <br />
      <button onClick={fetchWeather}>Fetch Data</button>
    </div>
  )
}
