function salary(input) {
  let index = 0;
  let openTabs = input[index];
  index++;
  let currentSalary = Number(input[index]);
  index++;

  for (i = 0; i <= openTabs; i++) {
    let currentTabs = input[index];
    index++;
    switch (currentTabs) {
      case "Facebook":
        currentSalary -= 150;
        break;
      case "Instagram":
        currentSalary -= 100;
        break;
      case "Reddit":
        currentSalary -= 50;
        break;
    }
    if (currentSalary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }

  if (currentSalary > 0) {
    console.log(Math.trunc(currentSalary));
  }
}
salary([]);
