const monthDayEl = document.querySelector('.right-panel__month-text');
const getDateEl = document.querySelector('.right-panel__numbers');
const dateEL = document.querySelector('.central-panel__header h3');

const currentDate = new Date();

let nameMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let day = currentDate.getDate();
let firstDay = new Date(year, month, 1);
let lastDay = new Date(year, month + 1, 0).getDate();

monthDayEl.innerText = nameMonth[month] + ' ' + year;


let dayWeekend = firstDay.getDay();
let lastDayWeekend = new Date(year, month + 1, 0).getDay();

function getNumbers(lastDay) {
   let mas = [];
   for (let i = 1; i <= lastDay; i++) {

      mas += "<li>" + i + "</li>";

   }
   return mas;
}

function lastDaysMonth(dayWeekend) {
   let daysMonth = [];
   let days = 0;
   for (let i = dayWeekend - 2; i >= 0; i--) {
      days = new Date(year, month, -i).getDate();
      daysMonth += '<li style = "opacity: 0.5;" >' + days + '</li>';
   }
   return daysMonth;
}

function firstDaysMonth(lastDayWeekend) {
   let daysMonth = [];
   let days = 0;
   for (let i = 1; i <= 7 - lastDayWeekend; i++) {
      if (lastDayWeekend === 0){
         return daysMonth;
      }
      days = new Date(year, month, i).getDate();
      daysMonth += '<li style = "opacity: 0.5">' + days + '</li>';
   }
   return daysMonth;
}


getDateEl.innerHTML = lastDaysMonth(dayWeekend) + getNumbers(lastDay) + firstDaysMonth(lastDayWeekend);


