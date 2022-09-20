function yardGreening(input) {

    let kvMetriOzeleneni = Number(input[0]);
    let edinKvMetur = 7.61;
    let ostupka = 0.18;

    let ozelenenqvaneNaCeliqDvor = kvMetriOzeleneni * edinKvMetur;
    let otstupkaOtObshtaSuma = ostupka * ozelenenqvaneNaCeliqDvor;
    let krainaCena = ozelenenqvaneNaCeliqDvor - otstupkaOtObshtaSuma;

    console.log(`The final price is: ${krainaCena} lv.`);
    console.log(`The discount is: ${otstupkaOtObshtaSuma} lv.`);
}
yardGreening(["550"])