import React from 'react';
import {useState, useEffect} from 'react';
import alertOneResource from '../../assets/audio/1.mp3';
import alertTwoResource from '../../assets/audio/2.mp3';
import alertThreeResource from '../../assets/audio/3.mp3';
import alertFourResource from '../../assets/audio/4.mp3';
import alertFiveResource from '../../assets/audio/5.mp3';
import alertSixResource from '../../assets/audio/6.mp3';
import alertSevenResource from '../../assets/audio/7.mp3';
import alertEightResource from '../../assets/audio/8.mp3';
import alertNineResource from '../../assets/audio/9.mp3';
import alertTenResource from '../../assets/audio/10.mp3';
import alertElevenResource from '../../assets/audio/11.mp3';
import alertTwelveResource from '../../assets/audio/12.mp3';
import alertPingResource from '../../assets/audio/ping.mp3';

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

  const alertOne = new Audio(alertOneResource);
  const alertTwo = new Audio(alertTwoResource);
  const alertThree = new Audio(alertThreeResource);
  const alertFour = new Audio(alertFourResource);
  const alertFive = new Audio(alertFiveResource);
  const alertSix = new Audio(alertSixResource);
  const alertSeven = new Audio(alertSevenResource);
  const alertEight = new Audio(alertEightResource);
  const alertNine = new Audio(alertNineResource);
  const alertTen = new Audio(alertTenResource);
  const alertEleven = new Audio(alertElevenResource);
  const alertTwelve = new Audio(alertTwelveResource);
  const alertPing = new Audio(alertPingResource);

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
