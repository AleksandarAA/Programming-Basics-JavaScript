function substitute(input){
  
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let isPossible = false;
    let isPossible2 = false;
    let subs = 0;

    for(let a = k; a <= 8; a++){
        for(let b = 9; b >= l; b--){
            for (let c = m; c <= 8; c++){
                for(let d = 9; d >= n; d--){
                    if(subs >= 6){
                        isPossible = false;
                        isPossible2 = false;
                        break;
                    }
                    if(a % 2 === 0 && b % 2 === 1 && c % 2 === 0 && d % 2 === 1){
                        isPossible = true;
                    }else{
                        isPossible = false;
                    }
                    if(a !== c || b !== d){
                        isPossible2 = true;
                    }else{
                        isPossible2 = false;
                    }
                    if(a == c && b == d && isPossible){
                        console.log(`Cannot change the same player.`);
                    }

                    if(isPossible && isPossible2){
                        console.log(`${a}${b} - ${c}${d}`);
                        subs++
                    }
                }
            }
        }
    }
}
substitute([]) 