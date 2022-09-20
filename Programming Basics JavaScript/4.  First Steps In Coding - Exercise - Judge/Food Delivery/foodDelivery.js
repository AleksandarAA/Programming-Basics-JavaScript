function foodDelivery(input) {

    let priceChickenMenu = 10.35;
    let priceFishMenu = 12.40;
    let priceVegetarianMenu = 8.15;
    let priceDelivery = 2.50;

    let numChickenMenus = Number(input[0]);
    let numFishMenus = Number(input[1]);
    let numVegetarianMenu = Number(input[2]);

    let totalPriceMenus = priceChickenMenu * numChickenMenus + priceFishMenu * numFishMenus + priceVegetarianMenu * numVegetarianMenu;
    let desertPrice = totalPriceMenus * 0.20;
    let totalPriceWithDelivery = desertPrice + priceDelivery + totalPriceMenus;

    console.log(totalPriceWithDelivery);
}
foodDelivery(["2 ","4 ","3 "])