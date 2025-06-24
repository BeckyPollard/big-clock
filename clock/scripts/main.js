// AUDIO SOUP
const audioPlonk = document.getElementById('plonk');
const audioPing = document.getElementById('ping');
const audioHrOne = document.getElementById('one');
const audioHrTwo = document.getElementById('two');
const audioHrThree = document.getElementById('three');
const audioHrFour = document.getElementById('four');
const audioHrFive = document.getElementById('five');
const audioHrSix = document.getElementById('six');
const audioHrSeven = document.getElementById('seven');
const audioHrEight = document.getElementById('eight');
const audioHrNine = document.getElementById('nine');
const audioHrTen = document.getElementById('ten');
const audioHrEleven = document.getElementById('eleven');
const audioHrTwelve = document.getElementById('twelve');

const optionsToggleClick = () => {
  audioPlonk.play();
}

// ————————————————————————————————————————————————————————————————————— \\

// OPTIONS
// test if local storage is available
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch(e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};
const storageAvailability = storageAvailable("localStorage");
if(!storageAvailability) {
  document.getElementById('optError').innerText = 'ERROR: Cannot access local storage. Options will not be saved.';
}

let options = {
  audioMin: localStorage.optAudioMin ? localStorage.optAudioMin === 'true' : false,
  audioHr: localStorage.optAudioHr ? localStorage.optAudioHr === 'true' : false,
  meridiem: localStorage.optMeridiem ? localStorage.optMeridiem === 'true' : true,
  seconds: localStorage.optSeconds ? localStorage.optSeconds === 'true' : false,
  theme: localStorage.theme ? localStorage.theme : 'dark',
};
document.body.className = options.theme;

const setOption = (optionId) => {
  audioPlonk.play();

  // toggle options
  switch(optionId) {
    case 'audioMin':
      options.audioMin = !options.audioMin;
      if(storageAvailability) {
        localStorage.setItem('optAudioMin', options.audioMin);
      }
      break;
    case 'audioHr':
      options.audioHr = !options.audioHr;
      if(storageAvailability) {
        localStorage.setItem('optAudioHr', options.audioHr);
      }
      break;
    case 'meridiem':
      options.meridiem = !options.meridiem;
      if(storageAvailability) {
        localStorage.setItem('optMeridiem', options.meridiem);
      }
      renderClock();
      break;
    case 'seconds':
      options.seconds = !options.seconds;
      if(storageAvailability) {
        localStorage.setItem('optSeconds', options.seconds);
      }
      renderClock();
      break;
    case 'dark':
    case 'light':
    case 'pinky':
    case 'ugly':
      options.theme = optionId;
      if(storageAvailability) {
        localStorage.setItem('theme', optionId);
      }
      document.body.className = optionId;
      break;
  }
};

// ————————————————————————————————————————————————————————————————————— \\

const init = () => {
  // set up options
  // future: pull in options from storage
  document.getElementById('audioMin').checked = options.audioMin;
  document.getElementById('audioHr').checked = options.audioHr;
  document.getElementById('meridiem').checked = options.meridiem;
  document.getElementById('seconds').checked = options.seconds;
  // render clock as per current options
  renderClock();
}

let minute = '';
let hour = '';

const renderClock = () => {
  const date = new Date();

  // set and format clock digits
  let hr = `${(date.getHours() > 12) ? date.getHours() - 12 : date.getHours()}`;
  let min = `:${(date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()}`;
  let sec = `:${(date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()}`;
  let meridiem = options.meridiem ? (hour > 12) ? " AM" : " PM" : '';
  // midnight check
  if(hr == 0) {
    hr = 12;
  }

  // MINUTE / HOUR CHANGE
  // Audio: Ping Minute
  if(options.audioMin && min !== minute && minute !== '') {
    // if chaning hours and options.audioHr, don't compete audio
    if(options.audioHr && hr !== hour && hour !== '') {
      // shut up
    } else {
      audioPing.play();
    }
  }

  // Audio: Announce Hour
  if(options.audioHr && hr !== hour && hour !== '') {
    switch(hr) {
      case '1':
        audioHrOne.play();
        break;
      case '2':
        audioHrTwo.play();
        break;
      case '3':
        audioHrThree.play();
        break;
      case '4':
        audioHrFour.play();
        break;
      case '5':
        audioHrFive.play();
        break;
      case '6':
        audioHrSix.play();
        break;
      case '7':
        audioHrSeven.play();
        break;
      case '8':
        audioHrEight.play();
        break;
      case '9':
        audioHrNine.play();
        break;
      case '10':
        audioHrTen.play();
        break;
      case '11':
        audioHrEleven.play();
        break;
      case '12':
        audioHrTwelve.play();
        break;
    }
  }
  // update comparisons after change
  minute = min;
  hour = hr;

  // RENDER TIME
  let time = `${hr}${min}${options.seconds ? sec : ''} ${meridiem}`;
  document.getElementById("big-clock").innerText = time;

  setTimeout(renderClock, 1000);
};

init();
