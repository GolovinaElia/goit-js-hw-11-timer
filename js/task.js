new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

const timerId = document.querySelector('#timer-1');
// Для подсчета значений используй следующие готовые формулы,
//     где time - разница между targetDate и текущей датой.

function pad(value) {
  return String(value).padStart(2, '0');
};
function getTimeComponents(time) {
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
};

