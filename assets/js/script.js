window.onload = function() {
  "use Strict";
  let allNumbers = document.querySelectorAll('.number');
  let cl_seconds = document.querySelector('.cl-seconds');
  let cl_minutes = document.querySelector('.cl-minutes');
  let cl_hours = document.querySelector('.cl-hours');

  let circleDegree = 360;
  let mainDifference = 60;
  let minutesDistance = circleDegree / 12;
  let startVal = 0;
  let secondsDistance = circleDegree / mainDifference;

  allNumbers.forEach(function(elem) {
    let valReq = minutesDistance * startVal;
    elem.style.cssText = "transform: translateX(-50%) rotate(" + valReq + "deg);";
    elem.firstElementChild.style.cssText = "transform: rotate(-" + valReq + "deg)";
    startVal++;
  });

  function cl_main_movement() {
    cl_seconds.style.cssText = "transform: rotate(" + secondsDistance + "deg)";

    console.log(secondsDistance);
    secondsDistance += 6;
    if(secondsDistance >= circleDegree) {
      secondsDistance = 0;
    }
  }

  var secInterval = setInterval(cl_main_movement, 1000);
}
