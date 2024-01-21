const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function counter() {
  const expectedDate = new Date("3-10-2024 00:00:00").getTime();
  const now = new Date().getTime();

  let diff = Math.floor(expectedDate - now); // to measure the difference between currentTime and expectedTime

  let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24)); // milliseconds -> seconds -> minutes -> hours -> Days
  days.innerText = daysDiff;

  let hoursDiff = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // days divided by minutes
  hours.innerText = hoursDiff;

  let minDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // minutes divided by seconds
  minutes.innerText = minDiff;

  let secondsDiff = Math.floor((diff % (1000 * 60)) / 1000); // seconds divided by miliseconds
  seconds.innerText = secondsDiff;

  if (diff < 0) {
    days.innerText = "00";
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
  }
}

setInterval(counter, 1000);
