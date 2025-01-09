import React from 'react';
import {useState} from 'react';

type BigClockProps = {
  // date: string;
};

export default function BigClock(props: BigClockProps) {
  const [time, setTime] = useState('00:00:00');

  const UpdateTime = () => {
    const date = new Date().toLocaleTimeString();
    setTime(date);
    // smells bad
  };

  setInterval(UpdateTime);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
