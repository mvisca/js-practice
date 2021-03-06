const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Create a date (month is in an array where January is 0 and the hour is in 0-24 format)
function makeDateString(futureDate) {
  const year = futureDate.getFullYear();
  const month = months[futureDate.getMonth()];
  const dayName = weekdays[futureDate.getDay()];
  const dayNum = futureDate.getDate();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();
  return `give away ends on ${dayName} ${ordinal(dayNum)} of ${month}, ${year}, at ${hours}:${mins}`;
};

// Ads the ordina suffix to number
function ordinal(dayNum) {
  let ord = '';
  if (dayNum === 1) {
    ord = 'st';
  } else if (dayNum === 2) {
    ord = 'nd';
  } else if (dayNum === 3) {
    ord = 'rd';
  } else if (dayNum >= 4) {
    ord = 'th';
  }
  return `${dayNum}${ord}`
};

// Add a '0' if number is minot to 10
function format(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

// Calculates te diff time and sets the textContent of const items
function remainingTime() {
  const secondsCurrent = new Date().getTime();
  console.log(futureDate);
  console.log(futureDate.getTime());

  const secondsTarget = futureDate.getTime();
  let secondsLeft = 0;
  if (secondsTarget > secondsCurrent) {
    secondsLeft = secondsTarget - secondsCurrent;
  }
  items[0].textContent = format(Math.floor(secondsLeft / 1000 / 60 / 60 / 24));
  items[1].textContent = format(Math.floor((secondsLeft / 1000 / 60 / 60) % 24));
  items[2].textContent = format(Math.floor((secondsLeft / 1000 / 60) % 60));
  items[3].textContent = format(Math.floor((secondsLeft / 1000) % 60));
};

const futureDate = new Date(2021,7,28,12,42,0);
giveaway.textContent = makeDateString(futureDate);

let countdown = setInterval(remainingTime, 1000);
// setInterval don't works if the function includes a parameter. Check documentation...
