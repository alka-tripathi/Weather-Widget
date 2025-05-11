import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './searchbox.css';
const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '975784f416277a22f2dae5be8a31fad3';

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonres = await res.json();
      console.log(jsonres);

      let result = {
        city: jsonres.name,
        humidity: jsonres.humidity,
        temp: jsonres.main.temp,
        tempMin: jsonres.main.temp_min,
        tempMax: jsonres.main.temp_max,
        feelsLike: jsonres.feels_like,
        weather: jsonres.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity('');
      let info = await getWeatherInfo();
      updateInfo(info);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Searchbox">
      <h1>Weather Report</h1>
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
        >
          Search
        </Button>
        {error && <p>No Such Place EXISTS!!</p>}
      </form>
    </div>
  );
};
export default SearchBox;
