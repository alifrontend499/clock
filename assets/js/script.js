window.onload = function () {
  "use Strict";
  let allNumbers = document.querySelectorAll('.number');
  let cl_seconds = document.querySelector('.cl-seconds');
  let cl_minutes = document.querySelector('.cl-minutes');
  let cl_hours = document.querySelector('.cl-hours');

  let circleDegree = 360;
  let minutesDistance = circleDegree / 12;
  let startVal = 0;

  allNumbers.forEach(function (elem) {
    let valReq = minutesDistance * startVal;
    elem.style.cssText = "transform: translateX(-50%) rotate(" + valReq + "deg);";
    elem.firstElementChild.style.cssText = "transform: rotate(-" + valReq + "deg)";
    startVal++;
  });

  function getSecs() {
    let date = new Date();
    var secs = date.getSeconds();
    cl_seconds.style.cssText = "transform: rotate(" + secs * 6 + "deg)";
  }

  function getMinutes() {
    let date = new Date();
    var minutes = date.getMinutes();
    cl_minutes.style.cssText = "transform: rotate(" + minutes * 6 + "deg)";
  }

  function getHours() {
    let date = new Date();
    var hours = date.getHours();
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    cl_hours.style.cssText = "transform: rotate(" + hours * 30 + "deg)";
  }
  setInterval(getSecs, 1000);
  setInterval(getMinutes, 1000); 
  setInterval(getHours, 1000);

  function disDate() { 
    let dateDiv = document.querySelector(".date-display-inner .date");
    let dayDiv = document.querySelector(".date-display-inner .day");
    let now = new Date();
    let currentday = now.getDay();
    let currentdate = now.getDate();
    let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if (dayDiv !== null) {
      dayDiv.innerHTML = currentdate;
    }
    if (dateDiv !== null) {
      dateDiv.innerHTML = dayArray[currentday];
    }
    console.log(currentdate);

   }
  disDate();
}
