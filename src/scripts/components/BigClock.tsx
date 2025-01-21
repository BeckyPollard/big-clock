import React from 'react';
import {useState} from 'react';

// type BigClockProps = {

// };
export default function BigClock() {
  const [time, setTime] = useState('BIG CLOCK');

  const UpdateTime = () => {
    const date = new Date().toLocaleTimeString();
    setTime(date);
    // smells bad
  };

  setInterval(UpdateTime);

  return (
    <main>
      <h1>{time}</h1>
    </main>
  );
}
