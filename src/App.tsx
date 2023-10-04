import React, { useEffect, useState } from 'react';
import './App.css';
import { AnotherPile } from './components/AnotherPile/AnotherPile';
import { States } from "./enums/states";
import { StateSelection } from "./components/StateSelection/StateSelection";
import LottieAnimation from "./components/LottieAnimation/LottieAnimation";

function App() {
    const [currentState, setCurrentState] = useState(States.sleeping);
    const [secondsPooped, setPoopOnCompanyTime] = useState(0);
    const [secondsWorked, setWorkedTime] = useState(0);
    const [secondsSlept, setSleptTime] = useState(0);
    const [date, setDate] = useState(new Date());

    const handleStateChange = (newState: States) => {
        setCurrentState(newState);
    };

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);

        return () => {
            clearInterval(timer);
            switch (currentState) {
                case States.sleeping:
                    setSleptTime(secondsSlept + 1);
                    break;
                case States.pooping:
                    setPoopOnCompanyTime(secondsPooped + 1);
                    break;
                case States.working:
                    setWorkedTime(secondsWorked + 1);
                    break;
                default:
                    break;
            }
        };
    });

    return (
        <header className="App-header">
            <div className="App">
                <div className="title">
                    <LottieAnimation/>
                    <h1>Time is Money</h1>
                </div>
                <p>Select current task:</p>
                <StateSelection currentState={currentState} onStateChange={handleStateChange} />
                <b>{date.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })}</b>

                <AnotherPile name={"💩 Pooping on company time"} instances={secondsPooped} />
                <AnotherPile name={"😴 Sleeping like a lazy bum"} instances={secondsSlept} />
                <AnotherPile name={"⚒️ Working like a slave"} instances={secondsWorked} />
            </div>
        </header>
    );
}

export default App;
