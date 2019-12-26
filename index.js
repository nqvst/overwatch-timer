let currentTime = (hour, min, sec) => `${Math.max(1, hour % 3)}:${min}:${sec}`;

setInterval(() => {
  const date = new Date();
  const newTime = currentTime(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
  const timeNode = document.getElementById("time");
  timeNode.innerHTML = `elapsed time: ${newTime}`;
}, 1000);
