setInterval(function () {
  const utc = document.querySelector(".time");
  const dayOfWeek = document.querySelector(".day");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  let currentDay = weekday[date.getUTCDay()];
  const currentUTCTimeMilliseconds = new Date().getTime() + "ms";
  dayOfWeek.textContent = currentDay;
  utc.textContent = currentUTCTimeMilliseconds;
}, 1000);
