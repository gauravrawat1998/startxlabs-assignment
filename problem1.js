// Question 1

let numberOfSeconds = 9855; // Change the value here
let secondsInOneMinute = 60;
let timeInHours = Math.floor(numberOfSeconds / 3600); // 3600 seconds in an hour
let timeInMinutes = Math.floor(
  (numberOfSeconds - timeInHours * 3600) / secondsInOneMinute
);
let timeInSeconds = numberOfSeconds - timeInHours * 3600 - timeInMinutes * 60;
console.log(
  `Hours = ${timeInHours}, Minutes = ${timeInMinutes}, Seconds = ${timeInSeconds}`
);
