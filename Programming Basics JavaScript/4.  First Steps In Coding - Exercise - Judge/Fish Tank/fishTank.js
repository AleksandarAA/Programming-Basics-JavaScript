function fishTank(input) {

    let duljinaCm = Number(input[0]);
    let shirochinaCm = Number(input[1]);
    let visochinaCm = Number(input[2]);
    let procent = Number(input[3]);

    let obemNaAkvarium = duljinaCm * shirochinaCm * visochinaCm;
    let obemVLitri = obemNaAkvarium * 0.001;
    let zaetoProstranstvo = procent;
    let nujniLitri = obemVLitri * (1 - 0.17);

    console.log(nujniLitri);
}
fishTank(["85 ","75 ","47 ","17 "])