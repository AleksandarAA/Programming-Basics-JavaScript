function workingHours(input) {
    
  let hours = Number(input[0]);
  let daysFromWeek = input[1];
  let workHours = hours >= 10 && hours <= 18;

  if (workHours) {
    switch (daysFromWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      case "Sunday":
        console.log("closed");
        break;
    }
  } else {
    console.log("closed");
  }
}
workingHours(["19", "Friday"]);
