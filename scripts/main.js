// AUDIO INGREDIENTS
const audioPlonk = document.getElementById('plonk');

const optionsToggleClick = () => {
  audioPlonk.play();
}

// ————————————————————————————————————————————————————————————————————— \\

// OPTIONS
let options = {
  audioMin: false,
  audioHr: false,
};

const setOption = (optionId) => {
  audioPlonk.play();

  if(optionId = 'audioMin') {
    options.audioMin = !options.audioMin;
  }

};

let minute = '';
let hour = '';

// ————————————————————————————————————————————————————————————————————— \\

const init = () => {
  // set up options
  // future: pull in options from storage
  document.getElementById('audioMin').checked = options.audioMin;
  document.getElementById('audioHr').checked = options.audioHr;

  renderClock();
}

const renderClock = () => {
  const date = new Date();

  // set and format clock digits
  let hr = `${(date.getHours() > 12) ? date.getHours() - 12 : date.getHours()}`;
  let min = `:${(date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()}`;
  let sec = `:${(date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()}`;
  let meridiem = (hour > 12) ? " AM" : " PM";

  // midnight check
  if(hr == 0) {
    hr = 12;
  }

  // options
  // Audio: Ping Minute
  if(options.audioMin && min !== minute && minute !== '') {
    audioPlonk.play();
  }
  // Audio: Announce Hour
  if(options.audioHr && hr !== hour && hour !== '') {
    audioPlonk.play();
  }

  minute = min;
  hour = hr;

  let time = `${hr}${min}${sec}`;
  document.getElementById("big-clock").innerText = time;

  setTimeout(renderClock, 1000); // setTimeout appropriate here? or outside func?
};

init();
