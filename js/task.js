class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector,
      this.targetDate = targetDate,
    this.intervalId = null
  }
    intervalId = setInterval(function () {
    let now = new Date().getTime();
    let time = new Date("Jul 17, 2021") - now;
    
    if (time >= 0) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = (
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = (Math.floor((time % (1000 * 60)) / 1000));
    
      document.querySelector('.value[data-value="days"]').innerHTML = days;
      document.querySelector('.value[data-value="hours"]').innerHTML = ("0"+hours).slice(-2);
      document.querySelector('.value[data-value="mins"]').innerHTML = ("0"+mins).slice(-2);
      document.querySelector('.value[data-value="secs"]').innerHTML = ("0"+secs).slice(-2);
    } else {
      clearInterval(this.intervalId);
    }
  }, 1000);
};
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});