import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  // const [count, setCount] = useState(0)
  let handleclick=()=>{
    console.log("btn was clicked");
  }

  return (
    <>
    <Button variant="text">Click Me</Button>
     <Button variant="contained" onClick={handleclick} startIcon={<DeleteIcon />}>Contained</Button>

     <Button variant="contained" color="error" onClick={handleclick} disabled>Click Me</Button>
     </>
  )
  
}

export default App
