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
            console.log(' ~ numInstances` ', numInstances);
            setNumInstances(numInstances + 1);
        }
    });

    return (
        <header className="App-header">
            <p>
                R&R Time Challenge Template 😀
            </p>
            <div className="App">
                <b>{date.toUTCString()}</b>
                <div className="money-row">
                    <AnotherPile instances={numInstances}/>
                    <AnotherPile instances={numInstances / 1.5}/>
                    <AnotherPile instances={numInstances / 2}/>
                </div>
            </div>
        </header>
    );
}

export default App;