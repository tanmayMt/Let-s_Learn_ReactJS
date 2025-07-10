import React, { useState } from 'react';
import axios from 'axios';
import { containerStyle, inputStyle, buttonStyle, cardStyle, titleStyle, errorStyle } from './weatherStyles';

const APIIntegrationWeather = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const fetchWeather = async()=>{
    try{
        const apiKey = '29f6407915ab5193c9d4d9ca58208fba';
        const response = await axios.get(
          //https://openweathermap.org/api
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          );
          setWeather(response.data);
          console.log(weather)
          setError('');
    }
    catch(err){
        setError('City not found!');
        setWeather(null);
    }
  }
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🌤 Weather Checker</h2>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={inputStyle}
      />
      <br />
      <button onClick={fetchWeather} style={buttonStyle}>
        🔍 Get Weather
      </button>
      
      {weather && (
        <div style={cardStyle}>
          <h3 style={{ color: '#0288d1' }}>{weather.name} 📍</h3>
          <p>🌡 Temperature: <strong>{weather.main.temp}°C</strong></p>
          <p>☁️ Condition: <strong>{weather.weather[0].description}</strong></p>
        </div>
      )}

      {error && <p style={errorStyle}>{error}</p>}
    </div>
  )
}

export default APIIntegrationWeather;
