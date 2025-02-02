import React, {useState} from 'react';
import {Options} from '../types/types' 
import BigClock from './components/BigClock';
import BigClockOptions from './components/BigClockOptions';

function App() {
  const initOptions: Options = {
    announceHour: false,
  } 
  const [options, setOptions] = useState<Options>({...initOptions});
  
  const handleOptions = (newOpts: Options) => {
    setOptions(newOpts);
  }
  
  return (
    <>
      <BigClock announceHour={options.announceHour}/>
      <BigClockOptions options={options} handleOptionsChange={handleOptions} />
    </>
  );
}

export default App;
