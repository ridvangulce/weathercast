import Image from 'next/image'
import React from 'react'

const Weather = ({ data }) => {

    return (
        <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[70vh] m-auto p-4 text-gray-300 z-10">
            <div className="relative flex md:gap-14 justify-around pr-12 pt-12 ">
                <div className='flex flex-col items-center'>
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        width="150"
                        height="150"
                        alt='/'
                    />
                    <p className='font-bold font-sans mb-10 ml-10 text-6xl'>{data.weather[0].main}</p>
                </div>
                <p className=' font-bold pt-10 text-7xl md:text-9xl' >{data.main.temp.toFixed(0)}&#176;C</p>
            </div>
            <div className='bg-black/50 relative rounded-md p-8  h-64 items-center justify-center '>
                <p className="text-2xl font-serif font-bold text-center pb-6">Weather in {data.name}</p>
                <div className="flex justify-between text-center">
                    <div className="">
                        <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;C</p>
                        <p className="text-xl">Feels Like</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-2xl">{data.main.humidity}%</p>
                        <p className="text-xl">Humidity</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)}MPH</p>
                        <p className="text-xl">Winds</p>
                    </div>
                </div>
            </div>
           
        </div>

    )
}

export default Weather