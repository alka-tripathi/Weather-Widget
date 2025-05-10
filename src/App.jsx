import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoBox from './InfoBox'
import WeatherApp from './WeatherApp';

function App() {
  // const [count, setCount] = useState(0)
  // let handleclick=()=>{
  //   console.log("btn was clicked");
  // }

  return (
    <>

    <WeatherApp></WeatherApp>
    
     </>
  )
  
}

export default App;
