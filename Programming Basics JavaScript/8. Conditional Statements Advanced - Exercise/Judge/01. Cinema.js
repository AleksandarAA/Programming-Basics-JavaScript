function cinema(input) {
  let typeProjection = input[0];
  let rowNum = Number(input[1]);
  let columns = Number(input[2]);
  let money = 0;

  if (typeProjection === "Premiere") {
    money = rowNum * columns * 12;
  } else if (typeProjection === "Normal") {
    money = rowNum * columns * 7.5;
  } else if (typeProjection === "Discount") {
    money = rowNum * columns * 5.0;
  }
  console.log(`${money.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
