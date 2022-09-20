function familyTrip(input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percent = Number(input[3]);

    if (nights > 7) {
        pricePerNight = pricePerNight * 0.95;
    }

    let sumForAllNights = pricePerNight * nights;
    let extraExpenses = (budget * percent / 100);
    let allExpenses = sumForAllNights + extraExpenses;

    if (budget >= allExpenses) {
        console.log(`Ivanovi will be left with ${(budget - allExpenses).toFixed(2)} leva after vacation.`);
    }else {
        console.log(`${(allExpenses - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50","8","100","2"])