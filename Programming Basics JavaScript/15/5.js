function easterEggsBattle(input) {
    
    let player1Eggs = Number(input[0]);
    let player2Eggs = Number(input[1]);
    let index = 2;
    let command = input[index];

    while(command != "End"){

        if (command === 'one') {
            player2Eggs--;
        }else if (command === 'two') {
            player1Eggs--;
        }

        if (player1Eggs === 0) {
            console.log(`Player one is out of eggs. Player one has ${player2Eggs} eggs left.`);
            break;
        }
        if (player2Eggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${player1Eggs} eggs left.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === 'End') {
        console.log(`Player one has ${player1Eggs} eggs left.`);
        console.log(`Player two has ${player2Eggs} eggs left.`);
    }
}
easterEggsBattle(["5","4","one","two","one","two","two","End"])