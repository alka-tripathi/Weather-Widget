import "./searchbox.css";
import {useState} from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
const WeatherApp=()=>{

    const [weatherInfo,setWeatherInfo]=useState({
             
        city:"Mumbai",
        humidity:45,
        temp:37,
        tempMin:38,
        tempMax:39.9,
        feelsLike:40,
        weather:"haze",
       
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);

    }
    return(
        <div className="weatherapp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox result={weatherInfo}></InfoBox>

        </div>
    )
}
export  default WeatherApp; 