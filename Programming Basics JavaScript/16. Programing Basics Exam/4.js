function workout(input){
    let trainingDays = Number(input[0]);
    let kilometers = Number(input[1]);
    let index = 2;
    let percent = 0;
    let totalKM = 0;
    for(let i = 1; i <= trainingDays; i++){
        percent = Number(input[index++]) 
        kilometers += ((kilometers * percent) / 100);
        totalKM += kilometers

    }
    totalKM += Number(input[1]);

    let diff = Math.abs(totalKM - 1000);
    if(totalKM < 1000){
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    } else{
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    }
}
workout(["5","30","10","15","20","5","12"])