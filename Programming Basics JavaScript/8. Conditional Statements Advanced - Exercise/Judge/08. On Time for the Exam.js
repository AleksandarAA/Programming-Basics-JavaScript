function onTimeForTheExam(input) {
  let hoursExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hoursArive = Number(input[2]);
  let minArrive = Number(input[3]);

  let timeExam = hoursExam * 60 + minExam;
  let timeArrive = hoursArive * 60 + minArrive;
  let diff = Math.abs(timeArrive - timeExam);

  let h = Math.floor(diff / 60);
  let m = diff % 60;

  if (timeExam < timeArrive) {
    console.log("Late");
    if (diff >= 60) {
      if (m < 10) {
        console.log(`${h}:0${m} hours after the start`);
      } else {
        console.log(`${h}:${m} hours after the start`);
      }
    } else {
      console.log(`${m} minutes after the start`);
    }
  } else if (timeArrive === timeExam || timeExam - timeArrive <= 30) {
    console.log("On time");
    if (diff > 0) {
      console.log(`${m} minutes before the start`);
    }
  } else {
    console.log("Early");
    if (h > 0) {
      if (m < 10) {
        console.log(`${h}:0${m} hours before the start`);
      } else {
        console.log(`${h}:${m} hours before the start`);
      }
    } else {
      console.log(`${m} minutes before the start`);
    }
  }
}
onTimeForTheExam(["9", "00", "7", "00"]);
