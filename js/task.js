class CountdownTimer {
  constructor({ time, days, hours, mins, secs }) {
    this.total = time
    this.days = days
    this.hours = hours
    this.mins = mins
    this.secs = secs
  }
  getTimeComponents(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date())
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    )
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000))
  }
  initializeClock(id, endtime) {
    const clock = document.getElementById("#timer-1")
    const daysSpan = clock.querySelector('value[data-value="days"]')
    const hoursSpan = clock.querySelector('value[data-value="hours"]')
    const minutesSpan = clock.querySelector('value[data-value="mins"]')
    const secondsSpan = clock.querySelector('value[data-value="secs"]')
  }
  updateClock() {
    const time = getTimeComponents(endtime)

    daysSpan.innerHTML = time.days
    hoursSpan.innerHTML = time.hours
    minutesSpan.innerHTML = time.minutes
    secondsSpan.innerHTML = time.seconds

    if (time.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock() {
    const timeinterval = setInterval(updateClock, 1000)
  }
  deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000)
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
})

function pad(value) {
  return String(value).padStart(2, "0")
}
// function getTimeComponents(endtime) {
//   const time = Date.parse(endtime) - Date.parse(new Date());
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return {
//     'total': time,
//     'days': days,
//     'hours': hours,
//     'minutes': mins,
//     'seconds': secs
//   };
// };

// function initializeClock(id, endtime) {
//   const clock = document.getElementById(id);
//   const daysSpan = clock.querySelector('value[data-value="days"]');
//   const hoursSpan = clock.querySelector('.hours');
//   const minutesSpan = clock.querySelector('.minutes');
//   const secondsSpan = clock.querySelector('.seconds');

// function updateClock() {
//   const time = getTimeComponents(endtime);

//   daysSpan.innerHTML = time.days;
//   hoursSpan.innerHTML = time.hours;
//   minutesSpan.innerHTML = time.minutes;
//   secondsSpan.innerHTML = time.seconds;

//   if (time.total <= 0) {
//     clearInterval(timeinterval);
//   };
// };

// updateClock();
// const timeinterval = setInterval(updateClock, 1000);
// };

// const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('countdown', deadline);
