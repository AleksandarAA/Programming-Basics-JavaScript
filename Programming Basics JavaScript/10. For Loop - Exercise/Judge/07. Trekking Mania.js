function treckingMania(input) {
  let index = 0;
  let groupCount = Number(input[index]);
  index++;

  let allPeople = 0;

  let musalaCount = 0;
  let montblancCount = 0;
  let kilimanjaroCount = 0;
  let k2Count = 0;
  let everestCount = 0;

  for (let i = 1; i < input.length; i++) {
    let peopleCount = Number(input[index]);
    index++;
    allPeople += peopleCount;
    if (peopleCount <= 5) {
      musalaCount += peopleCount;
    } else if (peopleCount >= 6 && peopleCount <= 12) {
      montblancCount += peopleCount;
    } else if (peopleCount >= 13 && peopleCount <= 25) {
      kilimanjaroCount += peopleCount;
    } else if (peopleCount >= 26 && peopleCount <= 40) {
      k2Count += peopleCount;
    } else {
      everestCount += peopleCount;
    }
  }

  let musala1 = (musalaCount / allPeople) * 100;
  let montblanc1 = (montblancCount / allPeople) * 100;
  let kilimanjaro1 = (kilimanjaroCount / allPeople) * 100;
  let k21 = (k2Count / allPeople) * 100;
  let everest1 = (everestCount / allPeople) * 100;

  console.log(`${musala1.toFixed(2)}%`);
  console.log(`${montblanc1.toFixed(2)}%`);
  console.log(`${kilimanjaro1.toFixed(2)}%`);
  console.log(`${k21.toFixed(2)}%`);
  console.log(`${everest1.toFixed(2)}%`);
}
