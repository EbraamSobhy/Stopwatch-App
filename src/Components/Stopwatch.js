import React, { useState, useEffect } from "react";
import "./Stopwatch.css";


function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setisRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(interval);
    }, [isRunning, time]);
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 60000) / 100);
    const milliseconds = time % 100;
    const startAndStop = () => {
        setisRunning(!isRunning);
    }
    const reset = () => {
        setTime(0);
    }

    return(
        <div className="stopwatch-container">
            <h1>Stopwatch <span style={{color: "darkred"}}>App</span></h1>
        <p className="stopwatch-time">
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
        </p>
        <div className="stopwatch-buttons">
            <button className="stopwatch-button" onClick={startAndStop}>
            {isRunning ? "Stop" : "Start"}
            </button>
            <button className="stopwatch-button" onClick={reset}>
            Reset
            </button>
        </div>
    </div>
    );
};

export default Stopwatch;