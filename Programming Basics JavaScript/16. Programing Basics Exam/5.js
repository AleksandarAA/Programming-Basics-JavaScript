function bestPlayer5(input){
    let index = 0;
    let command = input[index];
    let max = Number.MIN_SAFE_INTEGER;
    let playerName = input[index];
    let bestPlayer = input[index];

    while(command !== "END"){
        playerName = input[index++];
        let goals = Number(input[index++]);
        if(goals > max){
            max = goals;
            bestPlayer = command;
            if(max >= 10){
                break;
            }
        }
        command = input[index]
    }
    console.log(`${bestPlayer} is the best player!`);
    if(max >= 3){
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${max} goals.`);
    }
}
bestPlayer5([])