function maidenParty(input) {
    
    let maidenPartyPrice = Number(input[0]);
    let numLoveMessages = Number(input[1]);
    let numWaxRoses = Number(input[2]);
    let numKeychains = Number(input[3]);
    let numCatoons = Number(input[4]);
    let numLuckSurprises = Number(input[5]);

    let sum = numLoveMessages * 0.60 + numWaxRoses * 7.20 + numKeychains * 3.60 + numCatoons * 18.20 + numLuckSurprises * 22;
    let articles = numLoveMessages + numWaxRoses + numKeychains + numCatoons + numLuckSurprises; 

    if (articles >= 25) {
        sum = sum * 0.65;
    }
    
    let host = sum * 0.10;
    let profit = sum - host;

    if (profit > maidenPartyPrice) {
        console.log(`Yes! ${(profit - maidenPartyPrice).toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${(maidenPartyPrice - profit).toFixed(2)} lv needed.`);
    }
}
maidenParty(["320","8","2","5","5","1"])