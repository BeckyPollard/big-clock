// AUDIO INGREDIENTS
const audioPlonk = document.getElementById('plonk');

// CLICKS
const optionsToggleClick = () => {
  audioPlonk.play();
}

// CLOCK
const renderClock = () => {
  const date = new Date();

  // set and format clock digits
  let hour = `${(date.getHours() > 12) ? date.getHours() - 12 : date.getHours()}`;
  let min = `:${(date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()}`;
  let sec = `:${(date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()}`;
  let meridiem = (hour > 12) ? " AM" : " PM";

  // midnight check
  if(hour == 0) {
    hour = 12;
  }

  let time = `${hour}${min}${sec}`;
  document.getElementById("big-clock").innerText = time;

  setTimeout(renderClock, 1000); // setTimeout appropriate here? or outside func?
};
renderClock();
