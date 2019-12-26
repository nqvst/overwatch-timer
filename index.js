let currentTime = (hour, min, sec) => `${Math.max(1, hour % 3)}:${min}:${sec}`;

setInterval(() => {
  const date = new Date();
  date.setHours(1 + (date.getHours() % 3));

  const timeNode = document.getElementById("time");
  timeNode.innerHTML = `elapsed time: ${date.toLocaleTimeString()}`;
}, 1000);

console.log("%cHello there!", "color:yellow; font-size: 24px");
console.log(
  "interested in how this was made? check out the git repository on github: https://github.com/nqvst/overwatch-timer"
);
