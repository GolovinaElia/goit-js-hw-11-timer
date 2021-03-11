class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector,
    this.targetDate = targetDate,
    this.intervalId = null
  }
    intervalId = setInterval(function () {
    const date = new Date();
    let time = new Date("Jul 17, 2021") - date;
    
    if (time >= 0) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = (
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = (Math.floor((time % (1000 * 60)) / 1000));

      const timer = document.querySelector('#timer-1');
      timer.querySelector('.value[data-value="days"]').innerHTML = days;
      timer.querySelector('.value[data-value="hours"]').innerHTML = ("0"+hours).slice(-2);
      timer.querySelector('.value[data-value="mins"]').innerHTML = ("0"+mins).slice(-2);
      timer.querySelector('.value[data-value="secs"]').innerHTML = ("0"+secs).slice(-2);
    } else {
      clearInterval(this.intervalId);
    }
  }, 1000);
};
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});