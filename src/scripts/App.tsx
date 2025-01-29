import React, {useState} from 'react';
import {Options} from '../types/types' 
import BigClock from './components/BigClock';
import BigClockOptions from './components/BigClockOptions';




function App() {
  const [options, setOptions] = useState<Options>({announceHour: false});
  
  const handleOptions = () => {
    setOptions(options);
  }
  
  return (
    <>
      <BigClock />
      <BigClockOptions options={options} handleOptionsChange={handleOptions} />
    </>
  );
}



{/*

  SKETCH OF APP:
  BIG CLOCK
  OPTIONS
    - ALARM
    - NOISE
    - COLOURS
    - IN-15-MIN TIME SUBTITLE

  <input
    type='radio'
    value='value'
    onChange={(e) => setSelectedOption(e.target.value)}
  />

*/}

export default App;
