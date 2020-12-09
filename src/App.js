import React, { useState } from 'react';
import './App.css';
import apiData from './config.json';
import Form from './Form';
import Weather from './Weather';

function App() {
  const [weather, setWeather] = useState([])
  const apiKey = apiData.OPEN_WEATHER_KEY;


  async function fetchData(e) {

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    e.preventDefault();

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},&units=imperial&APPID=${apiKey}`)
      .then(res => res.json())
      .then(data => data)
      if(city && country){
    setWeather({
      data: apiData,
      city: apiData.name,
      country: apiData.sys.country,
      description: apiData.weather[0].description,
      temperature: apiData.main.temp,
      humidity: apiData.main.humidity,
      wind: apiData.wind.speed,
      error: "",
      icon: apiData.weather[0].icon
    }
    )}else{
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        humidity: '',
        wind: '',
        icon: '',
        error: "Please Type a City and Country"
    })
  }
  }
  return (
    <div className="App">
      <h3>Weather App</h3>
      <Form getWeather={fetchData} />

      <Weather
        city={weather.city}
        country={weather.country}
        description={weather.description}
        temperature={weather.temperature}
        humidity={weather.humidity}
        wind={weather.wind}
        error={weather.error}
        icon={weather.icon}
      />

      {console.log(weather.data)}

    </div>
  );
}

export default App;
