function demo(params) {
    
    for (let index = 1; index <= 50; index++) {
        if (index === 20) {
            continue;
        }
        console.log(index);
    }

}
demo()