const countDownClock = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
  
  
    function convertFormat(format) {
      switch (format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
        case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);}
  
    }
  
    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if (secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      }, 1000);
    }
  
    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor(seconds % 86400 / 3600);
      minutesElement.textContent = Math.floor(seconds % 86400 % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  };
  
  
  /*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
    let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "08/25/",
    birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
  birthday = dayMonth + nextYear;
}
let MyDate = new Date();
let c=MyDate.getTime();
console.log('c: ', c);
let a = new Date(2023,07,25);
let d=a.getTime();
console.log('d: ', d);
console.log('fourthOfJulyNextYear: ',d-c);
let mili=d-c;
let final=mili/86400000;
  countDownClock(final, 'days');