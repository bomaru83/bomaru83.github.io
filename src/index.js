const clockTitle = document.querySelector(".js-clock");
const christmasEve = new Date("12/25/2022");

function getClock() {
  const now = new Date();
  const diffTime = Math.floor((christmasEve.getTime() - now.getTime()) / 1000);
  const diffSecs = diffTime % 60;
  const diffMins = Math.floor(diffTime / 60) % 60;
  const diffHours = Math.floor(diffTime / 60 / 60) % 24;
  const diffDays = Math.floor(diffTime / 60 / 60 / 24);
  clockTitle.innerText = `${diffDays}d ${diffHours}h ${diffMins}m ${diffSecs}s`;
}

getClock();
setInterval(getClock, 1000);