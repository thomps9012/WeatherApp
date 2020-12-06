import React from 'react';

const Weather = ({description, city, country, error, temperature, humidity, wind}) => {
    return(
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>Temperature: {temperature} °F</p>}
            {humidity && <p>Humidity: {humidity} %</p>}
            {wind && <p>Wind Speed: {wind} mph</p>}
            {description && <p>Conditions: {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;