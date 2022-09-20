function fruitShop(a,b,c,d,e) {
    
    let strawberryPrice = Number(a);
    let bananasInKG = Number(b);
    let orangesInKG = Number(c);
    let raspberriesInKG = Number(d);
    let strawberryInKG = Number(e);

    let raspberriesPrice = strawberryPrice / 2;
    let orangesPrice = raspberriesPrice * 0.60;
    let bananasPrice = raspberriesPrice * 0.20;

    let strawberryTotal = strawberryPrice * strawberryInKG;
    let bananasTotal = bananasPrice * bananasInKG;
    let raspberrieTotal = raspberriesPrice * raspberriesInKG;
    let orangesTotal = orangesPrice * orangesInKG;

    let totalSum = strawberryTotal + bananasTotal + raspberrieTotal + orangesTotal;
    
    console.log(totalSum.toFixed(2));

}
fruitShop("48","10","3.3","6.5","1.7")