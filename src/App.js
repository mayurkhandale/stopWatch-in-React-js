import React, { useState, useEffect } from 'react';
import './style.css';
import Button from './Button';
export default function App() {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);
  console.log(flag);
  useEffect(() => {
    console.log('hii');
    let timer;
    if (flag) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [flag]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const mm = Math.floor(time / 60)
      .toString()
      .padStart('2', 0);
    const ss = (time % 60).toString().padStart('2', 0);
    return `${hours}:${ss}:${mm}`;
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {formatTime(time)}
      <button onClick={() => setFlag(true)}>Start</button>
      <button
        onClick={() => {
          setFlag(false);
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          setFlag(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
