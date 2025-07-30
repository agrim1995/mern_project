import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [info, setInfo] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/weather?city=${city}`);
      setInfo(res.data);
    } catch (err) {
      alert("Failed to fetch weather");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Weather Info</h3>
      <input className="form-control my-2" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" />
      <button className="btn btn-primary" onClick={fetchWeather}>Get Weather</button>
      {info && (
        <div className="mt-3">
          <h5>{info.location.name}, {info.location.country}</h5>
          <p>Temp: {info.current.temp_c}°C, Condition: {info.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
