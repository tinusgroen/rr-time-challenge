import React, { useEffect, useState } from 'react';
import './App.css';
import { AnotherPile } from './components/AnotherPile';



function App() {
  const [numInstances, setNumInstances] = useState(0); // Initial number of instances
const [date, setDate] = useState(new Date());



useEffect(() => {
  const timer = setInterval(() => setDate(new Date()), 1000)
  return function cleanup() {
    clearInterval(timer);
    console.log(' ~ numInstances` ', );
    setNumInstances(numInstances +1);
  }
});


  return (
  <div className="App">
    <AnotherPile instances={numInstances}/>
    <br />
    <AnotherPile instances={numInstances / 1.5}/>
    <br />
    <AnotherPile instances={numInstances / 2}/>
  </div>
  );
}

export default App;