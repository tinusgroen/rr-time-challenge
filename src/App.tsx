import React, { useEffect, useState } from 'react';
import './App.css';
import AnotherPile from './components/AnotherPile';


function App() {
let instances = 0;
const [date, setDate] = useState(new Date());



useEffect(() => {
  const timer = setInterval(() => setDate(new Date()), 1000)
  return function cleanup() {
    clearInterval(timer);
  }
});


  return (
<div className="App">
<AnotherPile instances={instances} />
</div>
  );
}

export default App;