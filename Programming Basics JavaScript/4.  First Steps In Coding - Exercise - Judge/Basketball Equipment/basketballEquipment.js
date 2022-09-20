function basketballEquipment(input) {

    let yearPriceBasket = Number(input[0]);

    let basketballShoes = yearPriceBasket - (yearPriceBasket * 0.40);
    let basketballClothes = basketballShoes - (basketballShoes * 0.20);
    let basketballBall = 1/4 * basketballClothes;
    let basketballAccessories = 1/5 * basketballBall;

    let total = yearPriceBasket + basketballShoes + basketballClothes + basketballBall + basketballAccessories;
    
    console.log(total);
}
basketballEquipment(["365 "])