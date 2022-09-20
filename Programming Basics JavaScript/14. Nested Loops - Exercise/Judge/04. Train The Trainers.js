function trainTheTrainers(input) {
  let index = 0;
  let jouri = Number(input[index]);
  index++;

  let command = input[index];
  index++;
  let sumGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    let name = command;
    let currentGradeSum = 0;
    counter++;
    for (let i = 0; i < jouri; i++) {
      let grade = Number(input[index]);
      index++;
      currentGradeSum += grade;
    }
    let currentAVG = currentGradeSum / jouri;
    sumGrade += currentAVG;
    console.log(`${name} - ${currentAVG.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  let AVG = sumGrade / counter;
  console.log(`Student's final assessment is ${AVG.toFixed(2)}.`);
}
trainTheTrainers([]);
