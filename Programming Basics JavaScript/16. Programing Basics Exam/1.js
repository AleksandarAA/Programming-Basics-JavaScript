function demo(input){
  
    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbohydrates = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let fatInGrams = ((totalCalories * percentFat) / 100) / 9;
    let proteinInGrams = ((totalCalories * percentProtein) / 100) / 4;
    let carbohydratesInGrams = ((totalCalories * percentCarbohydrates) / 100) / 4;
    let foodInGrams = fatInGrams + proteinInGrams + carbohydratesInGrams;
    let caloriesForGramOfFood = totalCalories / foodInGrams;
    let foodPercent = 100 - percentWater;

    let calories = (caloriesForGramOfFood * foodPercent) / 100;
    console.log(calories.toFixed(4));
    

}
catDiet(["60","25","15","2500","60"])