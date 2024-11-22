import React, { useEffect, useState } from 'react';


import '../css/Weather.css';

function Weather() {

    const [weatherDetails, setWeatherDetails] = useState({});

    // Async function to fetch weather data
    async function getWeather() {
        let fetchUrl = await fetch('https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=fc676f0a98ebdc2ee6424a83bb7de1f8&units=metric');
        let data = await fetchUrl.json();

        setWeatherDetails(data);
    }


    useEffect(() => { 
        getWeather();
    }, []);

    return (
        <div className="weather-container">
            <div className="weather-one">
                <div className="city">
                    <h3>Jaipur</h3> 
                    <h1 className='temp'>{Math.round(weatherDetails.main?.temp)}°C</h1>
                </div>
                <div className="current-weather">
                    <h3 className='current'>{weatherDetails.weather ? weatherDetails.weather[0].description : 'Loading...'}</h3> {/* Display current weather description */}
                </div>
            </div>
            <div className="weather-two">
                <div className="">
                    <p>{Math.round(weatherDetails.main?.feels_like)}°C</p>
                    <p className='weather-details'>Feels Like</p>
                </div>
                <div className="">
                    <p>{Math.round(weatherDetails.main?.humidity)}%</p>
                    <p className='weather-details'>Humidity</p>
                </div>
                <div className="">
                    <p>{Math.round(weatherDetails.wind?.speed)} MPH</p>
                    <p className='weather-details'>Wind Speed</p>
                </div>
            </div>
        </div>
    );
}

export default Weather;