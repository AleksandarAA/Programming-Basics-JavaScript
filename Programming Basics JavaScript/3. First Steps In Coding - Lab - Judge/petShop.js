function petShop(input) {

    let opakovkiZaKucheta = Number(input[0]);
    let opakovkiZaKotki = Number(input[1]);

    let obshtoCenaZaKucheta = opakovkiZaKucheta * 2.50;
    let obshtoCenaZaKotki = opakovkiZaKotki * 4;
    let total = obshtoCenaZaKotki + obshtoCenaZaKucheta;

    console.log(total);
}
petShop(["5 ","4 "])