function shopping(input) {
    const budget = Number(input[0]);
    const videoCardsAmount = Number(input[1]);
    const processorsAmount = Number(input[2]);
    const ramAmount = Number(input[3]);
 
    const videoCardPrice = 250;
    const videoCardsCost = videoCardsAmount * videoCardPrice;
    const processorPrice = videoCardsCost * 0.35;
    const ramPrice = videoCardsCost * 0.1;
 
    let totalCashNeeded = videoCardsCost + processorsAmount * processorPrice + ramAmount * ramPrice;
 
    if(videoCardsAmount > processorsAmount) {
        totalCashNeeded *= 0.85;
    }
    if(totalCashNeeded <= budget) {
        let cashLeft = budget - totalCashNeeded;
        console.log(`You have ${cashLeft.toFixed(2)} leva left!`);
    } else {
        let cashNeeded = totalCashNeeded - budget;
        console.log(`Not enough money! You need ${cashNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);