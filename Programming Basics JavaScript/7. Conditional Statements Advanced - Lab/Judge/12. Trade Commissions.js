function tradeCommissions(input) {
  let town = input[0];
  let sales = Number(input[1]);
  let commission = 0;

  if (0 <= sales && sales <= 500) {
    switch (town) {
      case "Sofia":
        commission = 0.05;
        break;
      case "Varna":
        commission = 0.045;
        break;
      case "Plovdiv":
        commission = 0.055;
        break;
      default:
        commission = 0;
        break;
    }
  } else if (500 < sales && sales <= 1000) {
    switch (town) {
      case "Sofia":
        commission = 0.07;
        break;
      case "Varna":
        commission = 0.075;
        break;
      case "Plovdiv":
        commission = 0.08;
        break;
      default:
        commission = 0;
        break;
    }
  } else if (1000 < sales && sales <= 10000) {
    switch (town) {
      case "Sofia":
        commission = 0.08;
        break;
      case "Varna":
        commission = 0.1;
        break;
      case "Plovdiv":
        commission = 0.12;
        break;
      default:
        commission = 0;
        break;
    }
  } else if (sales > 10000) {
    switch (town) {
      case "Sofia":
        commission = 0.12;
        break;
      case "Varna":
        commission = 0.13;
        break;
      case "Plovdiv":
        commission = 0.145;
        break;
      default:
        commission = 0;
        break;
    }
  }
  if (commission <= 0) {
    console.log("error");
  } else {
    console.log((sales * commission).toFixed(2));
  }
}
tradeCommissions(["Sofia", "1500"]);
