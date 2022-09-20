function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let quantity = input[2];
  let finalResult = 0;

  if (city === "Plovdiv") {
    switch (product) {
      case "coffee":
        finalResult = quantity * 0.4;
        break;
      case "water":
        finalResult = quantity * 0.7;
        break;
      case "beer":
        finalResult = quantity * 1.15;
        break;
      case "sweets":
        finalResult = quantity * 1.3;
        break;
      case "peanuts":
        finalResult = quantity * 1.5;
        break;
    }
  } else if (city === "Sofia") {
    switch (product) {
      case "coffee":
        finalResult = quantity * 0.5;
        break;
      case "water":
        finalResult = quantity * 0.8;
        break;
      case "beer":
        finalResult = quantity * 1.2;
        break;
      case "sweets":
        finalResult = quantity * 1.45;
        break;
      case "peanuts":
        finalResult = quantity * 1.6;
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "coffee":
        finalResult = quantity * 0.45;
        break;
      case "water":
        finalResult = quantity * 0.7;
        break;
      case "beer":
        finalResult = quantity * 1.1;
        break;
      case "sweets":
        finalResult = quantity * 1.35;
        break;
      case "peanuts":
        finalResult = quantity * 1.55;
        break;
    }
  }
  console.log(finalResult);
}
smallShop(["sweets", "Sofia", "2.23"]);
