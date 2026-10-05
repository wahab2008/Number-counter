import React from "react";
import { useState } from "react";


const App = () => {
  const [Counter, setCounter] =useState(0)
  return (
    <div className='Main'>
      <div className='child-box'>{Counter}</div>
      <div className='btns'>
        <button className='btn' onClick={function(){
         setCounter (Counter+1)
        }}>Increase</button>
        <button className='btn' onClick={function(){
        setCounter  (Counter-1)
        }}>Decrease</button>
        <button className='btn' onClick={function(){
          setCounter(0)
        }}>Reset</button>
        
      </div>
         
    </div>
  )
}

export default App;