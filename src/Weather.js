import React from 'react';

const Weather = ({description, city, country, error, temperature, humidity, wind, icon}) => {
 console.log(icon)
 var weatherIcon = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    
 return(
        <div>
            <br></br>
            {city && country && <h2>{city}, {country}</h2>}
            {icon && <img src={weatherIcon} alt="weather icon"></img>}
            {description && <h5>Conditions: {description}</h5>}
            {temperature && <h5>Temperature: {temperature} °F</h5>}
            {humidity && <h5>Humidity: {humidity} %</h5>}
            {wind && <h5>Wind Speed: {wind} mph</h5>}
            {error && <h5>{error}</h5>}
            
        </div>
    )
}

export default Weather;