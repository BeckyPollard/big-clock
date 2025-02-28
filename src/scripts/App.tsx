import React, {useState} from 'react';
import {Options} from '../types/types' 
import BigClock from './components/BigClock';
import BigClockOptions from './components/BigClockOptions';

function App() {
  const params = new URL(document.location.toString()).searchParams;
  const initOptions: Options = {
    announceHour: params.get('hr') == '1',
    announceMin: params.get('min') == '1',
  } 
  const [options, setOptions] = useState<Options>({...initOptions});
  
  const handleOptions = (newOpts: Options) => {
    setOptions(newOpts);
  }
  
  return (
    <>
      <BigClock announceHour={options.announceHour} announceMin={options.announceMin}/>
      <footer>
        <p>☆ just a simple big clock made by <a href="https://github.com/BeckyPollard/big-clock">Becky</a> ☆</p>
      </footer>
      <BigClockOptions options={options} handleOptionsChange={handleOptions} />
    </>
  );
}

export default App;
