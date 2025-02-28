import React from 'react';
import {useState, useEffect} from 'react';

type BigClockProps = {
  announceHour: boolean;
  announceMin: boolean;
};
export default function BigClock(props: BigClockProps) {
  const params = new URL(document.location.toString()).searchParams;

  const now = new Date()
    .toLocaleTimeString([], {timeStyle: 'short'})
    .replace(/[.]/g, '');

  const nowPlus = (new Date()).getTime()
  const nowPlusFifteen = new Date(nowPlus + 900000)
    .toLocaleTimeString([], {timeStyle: 'short'})
    .replace(/[.apm]/g, '');
  
  const [time, setTime] = useState(now);

  const alertOne = new Audio('/assets/audio/1.mp3');
  const alertTwo = new Audio('/assets/audio/2.mp3');
  const alertThree = new Audio('/assets/audio/3.mp3');
  const alertFour = new Audio('/assets/audio/4.mp3');
  const alertFive = new Audio('/assets/audio/5.mp3');
  const alertSix = new Audio('/assets/audio/6.mp3');
  const alertSeven = new Audio('/assets/audio/7.mp3');
  const alertEight = new Audio('/assets/audio/8.mp3');
  const alertNine = new Audio('/assets/audio/9.mp3');
  const alertTen = new Audio('/assets/audio/10.mp3');
  const alertEleven = new Audio('/assets/audio/11.mp3');
  const alertTwelve = new Audio('/assets/audio/12.mp3');
  const alertPing = new Audio('/assets/audio/ping.mp3');

  useEffect(() => { // TIME KEEPING!
    const interval = setInterval(() => {
      const newTime = new Date()
      .toLocaleTimeString([], {timeStyle: 'short'})
      .replace(/[.]/g, '');

      if (time !== newTime) {
        setTime(newTime);

        // ANNOUNCE TIME CHECK: HOUR
        // play alert per hour
        if (props.announceHour) {
          if (newTime.includes('1:00')) {
            alertOne.play();
          } else if (newTime.includes('2:00')) {
            alertTwo.play();
          } else if (newTime.includes('3:00')) {
            alertThree.play();
          } else if (newTime.includes('4:00')) {
            alertFour.play();
          } else if (newTime.includes('5:00')) {
            alertFive.play();
          } else if (newTime.includes('6:00')) {
            alertSix.play();
          } else if (newTime.includes('7:00')) {
            alertSeven.play();
          } else if (newTime.includes('8:00')) {
            alertEight.play();
          } else if (newTime.includes('9:00')) {
            alertNine.play();
          } else if (newTime.includes('10:00')) {
            alertTen.play();
          } else if (newTime.includes('11:00')) {
            alertEleven.play();
          } else if (newTime.includes('12:00')) {
            alertTwelve.play();
          } else if (newTime.includes('3:35')) {
            alertThree.play();
          }
        }

        // ANNOUNCE TIME CHECK: MINUTE
        // play alert every minute except hour when announceHour
        if (props.announceMin) {
          if (props.announceHour && newTime.includes(':00')) {
            // check if announceHour, dont alert on hour bc announce playing
            // refactor needed, this shouldn't be empty
          } else {
            alertPing.play();
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
    //https://www.geeksforgeeks.org/how-to-use-setinterval-method-inside-react-components/
  }, [time, props.announceMin, props.announceHour]);

  return (
    <main>
      <div>
        <h1>{time}</h1>
        {params.get('fifteen') == '1' ? <h2>+15 = {nowPlusFifteen}</h2> : <></>} {/* loralie's request */}
      </div>
    </main>
  );
}
