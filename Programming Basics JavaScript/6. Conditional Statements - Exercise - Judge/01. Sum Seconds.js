function sumSeconds(input) {
  let timeOne = Number(input[0]);
  let timeTwo = Number(input[1]);
  let timeThree = Number(input[2]);

  let totalTime = timeOne + timeTwo + timeThree;
  let totalTimeMin = Math.floor(totalTime / 60);
  let totalTimeSec = totalTime % 60;

  if (totalTimeSec < 10) {
    console.log(`${totalTimeMin}:0${totalTimeSec}`);
  } else {
    console.log(`${totalTimeMin}:${totalTimeSec}`);
  }
}
sumSeconds(["22", "7", "34"]);
