import './App.css';
import React, { useState } from 'react'

function App() {
  const APIkey = '8b056cc4938d7e9a8c51a5162df93618';
  const [city, setCity] = useState('');
  const [data, setData] = useState({});

  const handleChange = event => {
    setCity(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIkey)
    .then((response) => { return response.json() })
    .then((content) => { setData(content) })

    document.body.style.backgroundImage="url('https://source.unsplash.com/1920x1080/?" + city + "')"
  }


  return (
    <div className="container">
      <form className="input"
            onSubmit={handleSubmit}>
        <input  value={city}
                onChange={handleChange}
                placeholder="Put a city">
        </input>
        <button>X</button>
      </form>
      <div>
        {data.main ? <p> Temperature: {Math.round(data.main.temp - 273.15)} C</p> : ''}
        {data.weather ? <p> Weather: {data.weather[0].main} </p> : ''}
        {data.main ? <p> Humidity: {data.main.humidity} </p> : ''}
        {data.wind ? <p> Wind speed: {data.wind.speed} </p> : ''}
      </div>
    </div>
  )
}

export default App;