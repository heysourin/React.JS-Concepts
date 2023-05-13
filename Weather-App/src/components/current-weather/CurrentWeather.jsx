import React from 'react'

const CurrentWeather = ({ data }) => {
  return (
    <div
      className="w-80 rounded-md bg-blue-500 shadow-lg shadow-gray-400 text-white mx-auto mt-20 p-4
    "
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-xl leading-6 my-0 tracking-normal">
            {data.city}
            {/* memari */}
          </p>
          <p className="font-semibold text-0.5xl leading-6 my-0 tracking-normal">
            {data.weather[0].description}
            {/* ashfh */}
          </p>
        </div>
        <img alt="weather" className="w-100" src={`icons/${data.weather[0].icon}.png`} />
      </div>

      {/*@note : BOTTOM Starts */}
      <div className="flex justify-between flex-col items-center">
        <p className="font-semibold text-7xl w-auto tracking-tighter m-2.5">
        {Math.round(data.main.temp) - 273} °C
        </p>
        <div className="w-full p-5">
          {/* <div className="flex justify-between">
            <span className="font-normal text-left text-sm">Details</span>
          </div> */}
          <div className="flex justify-between">
            <span className="font-normal text-left text-sm">Feels like</span>
            <span className="font-normal text-right">{Math.round(data.main.feels_like)-273} °C</span>
          </div>
          <div className="flex justify-between">
            <span className="font-normal text-left text-sm">Wind</span>
            <span className="font-normal text-right">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="font-normal text-left text-sm">Humidity</span>
            <span className="font-normal text-right">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-normal text-left text-sm">Pressure</span>
            <span className="font-normal text-right">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
//w-72 rounded-6 shadow-md text-white bg-gray-900 mx-auto mt-20 p-4
