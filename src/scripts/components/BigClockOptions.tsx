import React, {useState} from 'react';
import {Options} from '../../types/types' 

type BigClockOptionsProps = {
  handleOptionsChange: (options:Options) => void;
  options: Options;
};
export default function BigClockOptions(props: BigClockOptionsProps) {
  const [options, setOptions] = useState(props.options);
  // const [time, setTime] = useState('BIG CLOCK');

  // const UpdateTime = () => {
  //   const date = new Date().toLocaleTimeString();
  //   setTime(date);
  //   // smells bad
  // };

  // setInterval(UpdateTime);

  // eslint-disable-next-line no-console
  // console.log(props.handleOptionsChange);

  // eslint-disable-next-line no-console
  console.log(options, setOptions);

  return (
    <div className="toggleContainer">
      <h2>Options</h2>
      <fieldset>
        <label htmlFor="opt-announce">
          <p>Announce Hour?</p>
          <input type="checkbox" id="opt-announce"/>
        </label>
        <label htmlFor="opt-alarm">
          <p>Alarm?</p>
          <input type="text" id="opt-alarm"/>
        </label>
        <label htmlFor="opt-gradient">
          <p>Alarm Gradient?</p>
          <input type="checkbox" id="opt-gradient"/>
        </label>
        <label htmlFor="opt-alarm-sound">
          <p>Alarm Sound?</p>
          <input type="checkbox" id="opt-alarm-sound"/>
        </label>
      </fieldset>
      {/* ALARM string? time? */}
      {/* ALARM NOISE boolean */}
      {/* GRADIENT boolean*/}
      {/* ANNOUNCE TIME boolean */}
    </div>
  );
}
