// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[value,setValues]=useState(20)
  // console.log(value)
  return (
    <div className="App">
    <p style={{fontSize:`${value}px`}}>Increase OR DEcrease</p>
     <button onClick={()=>setValues(value+2)}>+</button>
     <button onClick={()=>setValues(value-2)}>-</button>
    </div>
  );
}

export default App;
