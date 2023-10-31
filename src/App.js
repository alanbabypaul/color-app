import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('bg-dark');

  const handleColorChange = (newColor) => {
    setBgColor(newColor);
  };
  return (
<div className={`text-white ${bgColor}`}>
      <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
        <h1> Select Background Colors </h1>
        <div>
        <Button style={{backgroundColor:'purple'}} className='btn btn-light m-2' onClick={() => handleColorChange('bg-purple')}>PURPLE</Button>

        <button style={{backgroundColor:'Blue'}} className='btn btn-light m-2' onClick={() => handleColorChange('bg-blue')}>BLUE</button>
          <button  style={{backgroundColor:'green'}} className='btn btn-light m-2' onClick={() => handleColorChange('bg-green')}>GREEN</button>

          
          <button   style={{backgroundColor:'Red'}} className='btn btn-light m-2' onClick={() => handleColorChange('bg-red')}>RED</button>
        </div>
      </div>
    </div>
  );
}

export default App