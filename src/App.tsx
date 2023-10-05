import React, { useEffect, useState } from 'react';
import './App.css';
import { AnotherPile } from './components/AnotherPile/AnotherPile';
import { States } from "./enums/states";
import { StateSelection } from "./components/StateSelection/StateSelection";
import LottieAnimation from "./components/LottieAnimation/LottieAnimation";
import { Investments } from "./components/Investments/Investments";
import PoMonies from "./components/PoMonies/PoMonies"

function App() {
    const [currentState, setCurrentState] = useState(States.sleeping);
    const [secondsPooped, setPoopOnCompanyTime] = useState(0);
    const [secondsWorked, setWorkedTime] = useState(0);
    const [secondsSlept, setSleptTime] = useState(0);
    const [dateMultiplier, setDateMultiplier] = useState(1);
    const [showFullWidth, setShowFullWidth] = useState(false);
    const [date, setDate] = useState(new Date());

    console.log({fullWidth: showFullWidth});

    const handleStateChange = (newState: States) => {
        setCurrentState(newState);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            // Update the date based on the multiplier
            setDate((prevDate) => {
                const newDate = new Date(prevDate);
                newDate.setSeconds(newDate.getSeconds() + dateMultiplier);
                return newDate;
            });

            // Update the time counters based on the multiplier
            switch (currentState) {
                case States.sleeping:
                    setSleptTime((prevTime) => prevTime + dateMultiplier);
                    break;
                case States.pooping:
                    setPoopOnCompanyTime((prevTime) => prevTime + dateMultiplier);
                    break;
                case States.working:
                    setWorkedTime((prevTime) => prevTime + dateMultiplier);
                    break;
                default:
                    break;
            }
        }, 1000 / dateMultiplier); // Adjusted interval based on multiplier

        return () => {
            clearInterval(timer);
        };
    }, [currentState, dateMultiplier]);

    // Function to change the date multiplier
    const changeDateMultiplier = (multiplier: number) => {
        setDateMultiplier(multiplier);
    };

    const showPoMoniesOverlay = () => {
        console.log({fullWidth: showFullWidth})
        setShowFullWidth(true);
    }

    return (
        <header className="App-header">
            <div className="App">
                <div className="header">
                    <PoMonies showFullWidth={showFullWidth}/>
                    <LottieAnimation/>
                    <div className="title">
                        <h1>Time is Money</h1>
                        <div className="investment">
                            <Investments piles={{career: secondsWorked, health: secondsSlept + secondsPooped}}/>
                        </div>
                    </div>
                </div>
                <p>Select current task:</p>
                <StateSelection currentState={currentState} onStateChange={handleStateChange} />
                <b>{date.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })}</b>

                <div className="button-group">
                    <button className="button" onClick={() => changeDateMultiplier(1)}>Normal Speed</button>
                    <button className="button" onClick={() => changeDateMultiplier(2)}>2x Speed</button>
                    <button className="button" onClick={() => changeDateMultiplier(10)}>10x Speed</button>
                    <button className="button" onClick={() => showPoMoniesOverlay()}>PO Mode</button>
                </div>

                <AnotherPile name={"💩 Pooping on company time"} instances={secondsPooped} />
                <AnotherPile name={"😴 Sleeping like a lazy bum"} instances={secondsSlept} />
                <AnotherPile name={"⚒️ Working like a slave"} instances={secondsWorked} />
            </div>
        </header>
    );
}

export default App;
