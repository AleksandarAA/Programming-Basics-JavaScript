function demo() {
  let num = 4;

  if (num <= 10) {
    if (num % 2 === 0) {
      console.log("num < 10 and even");
    } else {
      console.log("num < 10 and odd");
    }
  } else {
    if (num % 2 === 0) {
      console.log("num > 10 and even");
    } else {
      console.log("num > 10 and odd");
    }
  }
}
demo();
