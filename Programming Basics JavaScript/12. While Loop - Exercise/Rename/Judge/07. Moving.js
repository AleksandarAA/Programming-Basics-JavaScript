function moving(input) {
  let index = 0;
  let w = Number(input[index]);
  index++;
  let l = Number(input[index]);
  index++;
  let m = Number(input[index]);
  index++;

  let boxSize = w * l * m;

  let command = input[index];
  index++;

  while (command !== "Done") {
    let pieces = Number(command);
    boxSize -= pieces;

    if (boxSize < 0) {
      console.log(
        `No more free space! You need ${Math.abs(boxSize)} Cubic meters more.`
      );
      break;
    }
    command = input[index];
    index++;
  }

  if (boxSize >= 0) {
    console.log(`${boxSize} Cubic meters left.`);
  }
}
moving([]);
