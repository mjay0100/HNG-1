function updateTime() {
  const now = new Date();
  const currentTimeUTC = now.toUTCString().split(" ")[4];
  const currentDay = now.toLocaleString("en-US", { weekday: "long" });

  document.getElementById(
    "currentTimeUTC"
  ).textContent = `Current Time (UTC): ${currentTimeUTC}`;
  document.getElementById(
    "currentDay"
  ).textContent = `Current Day: ${currentDay}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);
});
