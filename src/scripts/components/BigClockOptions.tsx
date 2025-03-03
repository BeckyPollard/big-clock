import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Options} from '../../types/types'
import alertPlonkResource from '../../assets/audio/plonk.mp3';

type BigClockOptionsProps = {
  handleOptionsChange: (options:Options) => void;
  options: Options;
};
export default function BigClockOptions(props: BigClockOptionsProps) {
  const [options, setOptions] = useState<Options>(props.options);
  const [toggleVisible, setToggleVisible] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const alertPlonk = new Audio(alertPlonkResource);

  const handleAnnounceHrOpt = useCallback((announce: boolean) => {
    const newOptions: Options = {...options};
    newOptions.announceHour = announce;
    setOptions(newOptions); // need this?
    props.handleOptionsChange(newOptions);
    alertPlonk.play();
  }, [options, setOptions]);
  const handleAnnounceMinOpt = useCallback((announce: boolean) => {
    const newOptions: Options = {...options};
    newOptions.announceMin = announce;
    setOptions(newOptions); // need this?
    props.handleOptionsChange(newOptions);
    alertPlonk.play();
  }, [options, setOptions]);

  const handleClickEvent = (ev: MouseEvent) : void => {
    // CLOSING THE OPTIONS MENU
    // if the click happens outside of the menu (ref div)
    // close box with setToggleVisible
    if (ev.target instanceof HTMLElement && !menuRef.current?.contains(ev.target)) {
      setToggleVisible(false)
    }
  }

  const toggleMenu = () => {
    setToggleVisible(toggleVisible ? false : true)
  }

  useEffect(() =>{
    // register click handler
    window.addEventListener('click', handleClickEvent); 
    return function cleanupClickListener() {
      // unregister when component unmounts
      window.removeEventListener('click', handleClickEvent);
    }
  },[])

  return (
    <>
      <div className='toggleButton'>
        <button onClick={toggleMenu} className={toggleVisible ? 'active' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
            {/* https://iconmonstr.com/gear-1-svg/ */}
          </svg>
        </button>
      </div>
      <div
        className={`toggleContainer ${toggleVisible ? 'active' : ''}`}
        ref={menuRef}
      >
        <div>
          <h2>Big Clock Options</h2>
        </div>
        <div>
        <hr />
          <fieldset>
            <label htmlFor="opt-announce">
              <p>Announce Hour?</p>
              <input
                type="checkbox"
                id="opt-announce"
                onChange={(e) => handleAnnounceHrOpt(e.target.checked)}
                checked={props.options.announceHour}
              />
            </label>
            <label htmlFor="opt-announce">
              <p>Alert Minute?</p>
              <input
                type="checkbox"
                id="opt-announce"
                onChange={(e) => handleAnnounceMinOpt(e.target.checked)}
                checked={props.options.announceMin}
              />
            </label>
          </fieldset>
        </div>
      </div>
    </>
  );
}
