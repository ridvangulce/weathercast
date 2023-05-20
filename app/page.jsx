"use client";
import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import Image from "next/image";
import axios from "axios";
import Weather from "@/components/Weather";
import Spinner from "../public/spinner.gif"
export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url)
      .then((res) => {
        setWeather(res.data);
        setCity("");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error); // Hata durumunu konsola yazdırabilirsiniz.

        setError("Weather data couldn't be retrieved. Please try again.");
      });
    setError(null)
  }



  return (
    <div className="overflow-hidden ">

      {/* OVERLAY!*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />

      {/* BACKGROUND IMAGE*/}

      <Image src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
        layout="fill"
        alt="image/jpeg"
        className="object-cover"
      />
      {/* SEARCH*/}
      <div className="relative flex justify-between items-center max-w-[500px] m-auto pt-4 text-white z-10">
        <form className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-400 rounded-2xl" onSubmit={fetchWeather}>
          <div>
            <input className="w-full bg-transparent border-none text-white focus:outline-none text-2xl"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              placeholder="Search City"
            />
          </div>
          <div>
            <button onClick={fetchWeather}><BsSearch size={30} /></button>
          </div>
        </form>
      </div>
      {/* WEATHER*/}
      {loading ? (
        <div className="relative">
          <Image className="w-auto mt-44 m-auto" src={Spinner} alt="loading..." />
        </div>
      ) : (
        <div className="items-center justify-center flex" >
          {error ? (
            <p className=" relative border rounded-3xl bg-gradient-to-r from-red-400 to-black p-10 items-center justify-center mt-20 text-white font-bold text-2xl text-center">{error}</p>
          ) : (
            weather.main && <Weather data={weather} />
          )}
        </div>
      )}

    </div>
  )
}
