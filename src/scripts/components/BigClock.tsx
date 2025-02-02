import React from 'react';
import {useState} from 'react';

type BigClockProps = {
  announceHour: boolean;
};
export default function BigClock(props: BigClockProps) {
  const now = new Date()
    .toLocaleTimeString([], {timeStyle: 'short'})
    .replace(/[.]/g, '');
  const [time, setTime] = useState(now);

  const UpdateTime = () => {
    const newTime = new Date()
      .toLocaleTimeString([], {timeStyle: 'short'})
      .replace(/[.]/g, '');
    setTime(newTime);
  };
  setInterval(UpdateTime, 1000);
  // talk to your doctor and see if useInterval is right for you.
  // further reading: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // https://www.geeksforgeeks.org/how-to-use-setinterval-method-inside-react-components/

  return (
    <main>
      <h1>{time}</h1>
    </main>
  );
}
