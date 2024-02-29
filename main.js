let giveaway = document.querySelector('.giveaway-date');
let deadline = document.querySelector('.deadline');
let daysDisplay = document.querySelector('.days');
let hoursDisplay = document.querySelector('.hours');
let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');


let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);

function updateCountdown() {
  let currentTime = new Date().getTime();
  let timeDifference = futureDate.getTime() - currentTime;

  if (timeDifference > 0) {
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;

    let days = Math.floor(timeDifference / oneDay);
    let hours = Math.floor((timeDifference % oneDay) / oneHour);
    let minutes = Math.floor((timeDifference % oneHour) / oneMinute);
    let seconds = Math.floor((timeDifference % oneMinute) / 1000);

    // Display values directly without loop
    daysDisplay.textContent = days < 10 ? `0${days}` : days;
    hoursDisplay.textContent = hours < 10 ? `0${hours}` : hours;
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
  } else {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired expired-message">Sorry, this giveaway has expired! <br/> Please check back soon.</h4>`;
    const expiredMessage = document.querySelector('.expired-message');
    expiredMessage.style.color = 'red';
    expiredMessage.style.fontWeight = 'bold';
    expiredMessage.textContent = expiredMessage.textContent.toUpperCase();
  }
}

// this allows us to call the set time interval with evry miliseconds
let countdown = setInterval(updateCountdown, 1000);

// it allows us to set interval values
updateCountdown();
