import React from 'react';

const Weather = ({description, city, country, error, temperature, humidity, wind}) => {
    return(
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}</p>}
            {humidity && <p>{humidity}</p>}
            {wind && <p>{wind}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;