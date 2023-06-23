const anchorageTxt = document.querySelector(".usaAnchorage p");
const reykjavikTxt = document.querySelector(".icelandReykjavik p");
const saitPiterburgTxt = document.querySelector(".saintPeterRussia p");
const currentTxt = document.querySelector(".currentDiv p");
const timeZoneOfanchorage = new Date().toLocaleString("en-US", {
  timeZone: "America/Anchorage",
});

const icelandReykjavik = new Date().toLocaleString("en-US", {
  timeZone: "Iceland",
});

const saintPeterRussia = new Date().toLocaleString("en-US", {
  timeZone: "Europe/Moscow",
});

const current = new Date();
const time = current.getHours() + ":" + current.getMinutes();
const currentDay =
  current.getFullYear() + "-" + current.getMonth() + "-" + current.getDate();

currentTxt.textContent = `Current Time: ${time} Current Date: ${currentDay}`;

anchorageTxt.textContent = `Time in Anchorage/USA: ${timeZoneOfanchorage}`;
reykjavikTxt.textContent = `Time in Reykjavik/Iceland: ${icelandReykjavik}`;
saitPiterburgTxt.textContent = `Time in Saint Petersburg/Russia: ${saintPeterRussia}`;

const myBirthDayTxt = document.querySelector(".myBirthDayDiv p");
const myBirthDay = new Date("1992-05-14");

const calculateDay = (date1, date2) => {
  const diff = Math.abs(date1 - date2);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
};

const days = calculateDay(current, myBirthDay);
myBirthDayTxt.textContent = `Days from my birthday: ${days} days`;

// what time and date will be in 80000 hours from now
const hours = 80000;
const hoursFromNow = new Date(current.getTime() + hours * 60 * 60 * 1000);

const countTimeTxt = document.querySelector(".countTime p");
const numberInput = document.querySelector("#numberInput");
const calculatedTime = document.querySelector(".countTime h6");
countTimeTxt.textContent = `Current time:${time} Current date:${currentDay}`;

numberInput.addEventListener("input", (e) => {
  const hours = e.target.value;
  let featureTime = new Date(current.getTime() + hours * 60 * 60 * 1000);
  calculatedTime.textContent = `Time after ${hours} hours will be: ${featureTime}`;
});

// Exercise 4
const timeTxt = document.querySelector(".time p");
const seconds = new Date().getSeconds();
const amPmBtn = document.querySelector(".amPm");
const normalBtn = document.querySelector(".normal");
const weekDayTxt = document.querySelector(".day p");
const montthDayTxt = document.querySelector(".numberAndMont p");
const yearTxt = document.querySelector(".year p");
const weekDay = new Date().getDay();
const monthDay = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
yearTxt.textContent = year;

weekDayTxt.textContent = weekDay;

window.onload = displayClock();
function displayClock() {
  const timeinAmPm = new Date().toLocaleTimeString();
  const timeIn24Hour = new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });
  timeTxt.textContent = timeinAmPm;
  amPmBtn.addEventListener("click", () => {
    timeTxt.textContent = timeinAmPm;
  });
  normalBtn.addEventListener("click", () => {
    timeTxt.textContent = timeIn24Hour;
  });

  setTimeout(displayClock, 1000);
}

const checkWeekDay = (weekDay) => {
  switch (weekDay) {
    case 0:
      weekDayTxt.textContent = "Sunday";
      break;
    case 1:
      weekDayTxt.textContent = "Monday";
      break;
    case 2:
      weekDayTxt.textContent = "Tuesday";
      break;
    case 3:
      weekDayTxt.textContent = "Wednesday";
      break;
    case 4:
      weekDayTxt.textContent = "Thursday";
      break;
    case 5:
      weekDayTxt.textContent = "Friday";
      break;
    case 6:
      weekDayTxt.textContent = "Saturday";
      break;
  }
};

checkWeekDay(weekDay);

const checkMonth = (month) => {
  switch (month) {
    case 0:
      montthDayTxt.textContent = `${monthDay}\January`;
      break;
    case 1:
      montthDayTxt.textContent = `${monthDay}\February`;
      break;
    case 2:
      montthDayTxt.textContent = `${monthDay}\March`;
      break;
    case 3:
      montthDayTxt.textContent = `${monthDay}\nApril`;
      break;
    case 4:
      montthDayTxt.textContent = `${monthDay}\nMay`;
      break;
    case 5:
      montthDayTxt.textContent = `${monthDay}\nJune`;
      break;
    case 6:
      montthDayTxt.textContent = `${monthDay}\nJuly`;
      break;
    case 7:
      montthDayTxt.textContent = `${monthDay}\nAugust`;
      break;
    case 8:
      montthDayTxt.textContent = `${monthDay}\nSeptember`;
      break;
    case 9:
      montthDayTxt.textContent = `${monthDay}\nOctober`;
      break;
    case 10:
      montthDayTxt.textContent = `${monthDay}\nNovember`;
      break;
    case 11:
      montthDayTxt.textContent = `${monthDay}\nDecember`;
      break;
  }
};
checkMonth(month);
