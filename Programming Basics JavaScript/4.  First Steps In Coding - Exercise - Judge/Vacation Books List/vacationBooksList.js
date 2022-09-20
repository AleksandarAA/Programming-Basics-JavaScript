function vacationBooksList(input) {

    let numOfPages = Number(input[0]);
    let pages1h = Number(input[1]);
    let numOfDays = Number(input[2]);
    
    let totTime = numOfPages / pages1h ;
    let hPerDay = totTime / numOfDays ;

    console.log(hPerDay)
}
vacationBooksList(["212 ","20 ","2 "])