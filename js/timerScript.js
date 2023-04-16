let countdown;
const timerDisplay = document.querySelector('.timerDisplay');
const monthsText = document.querySelector('#monthsText');
const daysText = document.querySelector('#daysText');
const hoursText = document.querySelector('#hoursText');
const minutesText = document.querySelector('#minutesText');
const secondsText = document.querySelector('#secondsText');

let dateNow, timeDiff;
const dateEnd = new Date('2023-07-23T00:00:00');

function startTimer() {
    clearInterval(countdown);

    dateNow = new Date();
    timeDiff = Math.abs(dateEnd - dateNow) / 1000;

    displayTimeLeft(timeDiff);
    countdown = setInterval(() => {
        dateNow = new Date();
        timeDiff = Math.abs(dateEnd - dateNow) / 1000;
        // check if we should stop it!
        if (timeDiff < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(timeDiff);
    }, 1000);
}

function displayTimeLeft(timeDiff) {
    let seconds = Math.floor(timeDiff % 60);
    let minutes = Math.floor((timeDiff / 60) % 60);
    let hours = Math.floor((timeDiff / 3600) % 24);
    let days = Math.floor(timeDiff / (24 * 3600));
    
    if (String(days).length === 1) days = '0' + days;
    daysText.textContent = days;
    if (String(hours).length === 1) hours = '0' + hours;
    hoursText.textContent = hours;
    if (String(minutes).length === 1) minutes = '0' + minutes;
    minutesText.textContent = minutes;
    if (String(seconds).length === 1) seconds = '0' + seconds;
    secondsText.textContent = seconds;
}
startTimer();
