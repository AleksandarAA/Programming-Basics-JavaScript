function excursionCalculator(input) {
    
    let numOfPeople = Number(input[0]);
    let season = input[1];
    let pricePerPerson = 0;

    switch(season){
        case "spring":
            if (numOfPeople <= 5) {
                pricePerPerson = 50;
            }else if (numOfPeople > 5) {
                pricePerPerson = 48;
            }
            break;
        case "summer":
            if (numOfPeople <= 5) {
                pricePerPerson = 48.50;
            }else if (numOfPeople > 5) {
                pricePerPerson = 45;
            }

            break;
        case "autumn":
            if (numOfPeople <= 5) {
                pricePerPerson = 60;
            }else if (numOfPeople > 5) {
                pricePerPerson = 49.50;
            }
            break;
        case "winter":
            if (numOfPeople <= 5) {
                pricePerPerson = 86;
            }else if (numOfPeople > 5) {
                pricePerPerson = 85;
            }
            break;
    }

    let totalSum = numOfPeople * pricePerPerson;

    switch(season){
        case "summer": totalSum = totalSum * 0.85; break;
        case "winter": totalSum = totalSum * 1.08; break;
    }

    console.log(`${totalSum.toFixed(2)} leva.`);

}
excursionCalculator(["20","winter"])