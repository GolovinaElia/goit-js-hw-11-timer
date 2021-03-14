class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.intervalId = null,
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);

  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  }

  timer() {
    setInterval(() => {
      const date = new Date();
        const time = this.targetDate - date;
      if (time >= 0) {
        this.days.innerHTML = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hours.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.minutes.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.seconds.innerHTML = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      } else {
        clearInterval(this.intervalId);
      }
      }, 1000);
  }
}
new CountdownTimer({
   selector: "#timer-1",
   targetDate: new Date('Jul 17, 2021'),
 }).timer();