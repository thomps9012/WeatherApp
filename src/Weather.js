import React from 'react';

const Weather = ({description, city, country, error, temperature, humidity, wind, icon}) => {
 console.log(icon)
 var weatherIcon = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    
 return(
        <div>
            <br></br>
            {city && country && <p>{city}, {country}</p>}
            <br></br>
            {icon && <img src={weatherIcon}></img>}
            {description && <p>Conditions: {description}</p>}
            
            {temperature && <p>Temperature: {temperature} °F</p>}
            {humidity && <p>Humidity: {humidity} %</p>}
            {wind && <p>Wind Speed: {wind} mph</p>}
            
            {error && <p>{error}</p>}
            
        </div>
    )
}

export default Weather;