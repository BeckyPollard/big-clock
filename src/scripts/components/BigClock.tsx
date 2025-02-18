import React from 'react';
import {useState, useEffect} from 'react';

type BigClockProps = {
  announceHour: boolean;
};
export default function BigClock(props: BigClockProps) {
  const now = new Date()
    .toLocaleTimeString([], {timeStyle: 'short'})
    .replace(/[.]/g, '');
  
    const [time, setTime] = useState(now);

  useEffect(() => {
    // TIME KEEPING!

    const interval = setInterval(() => {
      const newTime = new Date()
      .toLocaleTimeString([], {timeStyle: 'short'})
      .replace(/[.]/g, '');
      if (time !== newTime) {
        setTime(newTime);

        // ANNOUNCE TIME
        if (props.announceHour) {
          if (newTime.includes('1:00')) {
            console.log('DING DONG 1 o clock', newTime);
          } else if (newTime.includes('2:00')) {
            console.log('DING DONG 2 o clock', newTime);
          } else if (newTime.includes('3:00')) {
            console.log('DING DONG 3 o clock', newTime);
          } else if (newTime.includes('4:00')) {
            console.log('DING DONG 4 o clock', newTime);
          } else if (newTime.includes('5:00')) {
            console.log('DING DONG 5 o clock', newTime);
          } else if (newTime.includes('6:00')) {
            console.log('DING DONG 6 o clock', newTime);
          } else if (newTime.includes('7:00')) {
            console.log('DING DONG 7 o clock', newTime);
          } else if (newTime.includes('8:00')) {
            console.log('DING DONG 8 o clock', newTime);
          } else if (newTime.includes('9:00')) {
            console.log('DING DONG 9 o clock', newTime);
          } else if (newTime.includes('10:00')) {
            console.log('DING DONG 10 o clock', newTime);
          } else if (newTime.includes('11:00')) {
            console.log('DING DONG 11 o clock', newTime);
          } else if (newTime.includes('12:00')) {
            console.log('DING DONG 12 o clock', newTime);
          }
          // ew
        }
      }
    }, 1000);

    return () => clearInterval(interval);
    //https://www.geeksforgeeks.org/how-to-use-setinterval-method-inside-react-components/
  }, [time]);

  return (
    <main>
      <h1>{time}</h1>
    </main>
  );
}
