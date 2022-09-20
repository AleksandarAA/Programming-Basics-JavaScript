//function demo() {
//    let text = 'Test123!';
//    let lastElement = text[text.length-1]
//
//   console.log(lastElement);
//}
//demo()

//function demo() {
//    let text = 'Test123!';
//    let lastElement = text.charAt(text.length-1)
//
//    console.log(lastElement);
//}
//demo()

//function demo() {
//   let text = 'Test123!';
//
//    for(let index = 0; index < text.length; index++){
//        console.log(text.charAt(index))
//    }
//}
//demo()

//function demo(input) {
//    let data = input[0]
//    let sum = 0
//
//    for(let index = 0; index < data.length; index++){
//        let currentNumber = Number(data[index])
//        sum = sum + currentNumber
//    }
//
//    console.log(sum);
//}
//demo(["564891"])

function demo(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let sum = 0;
  let allNumbers = "";

  for (let i = start; i <= end; i++) {
    if (i % 9 === 0) {
      sum += i;
      allNumbers += `${i} `;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(allNumbers);
}
demo(["100", "200"]);
