function zad(input) {
  let age = Number(input[0]);
  let gender = input[1];

  switch (gender) {
    case "f":
      if (age < 16) {
        console.log("Miss");
      } else {
        console.log("Ms.");
      }
      break;
    case "m":
      if (age < 16) {
        console.log("Master");
      } else {
        console.log("Mr.");
      }
      break;
  }

//   if (gender === "f") {
//     if (age < 16) {
//       console.log("Miss");
//     } else {
//       console.log("Ms.");
//     }
//   } else if (gender === "m") {
//     if (age < 16) {
//       console.log("Master");
//     } else {
//       console.log("Mr.");
//     }
//   }
}
zad(["16", "m"]);
