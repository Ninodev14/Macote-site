let datetoday = new Date();
let date14_11_2023 = new Date(2023, 10, 14);
let date15_11_2023 = new Date(2023, 10, 15);
let date16_11_2023 = new Date(2023, 10, 16);
let date17_11_2023 = new Date(2023, 10, 17);
let date18_11_2023 = new Date(2023, 10, 18);
let date19_11_2023 = new Date(2023, 10, 19);
let date20_11_2023 = new Date(2023, 10, 20);
let date21_11_2023 = new Date(2023, 10, 21);
let date22_11_2023 = new Date(2023, 10, 22);
let date23_11_2023 = new Date(2023, 10, 23);
let text = ""

function writing() {
    document.getElementById('p3').innerHTML = text
}

document.getElementById('p1').innerHTML = date14_11_2023;
document.getElementById('p2').innerHTML = datetoday;


if (datetoday > date14_11_2023) {
    text = "Jour1: Que mettre dans le potager ? Fruits de saison"
    writing()
}
if (datetoday > date15_11_2023) {
    text = "Jour2: Acheter les graines"
    writing()
}
if (datetoday > date16_11_2023) {
    text = "Jour 3 : préparer la terre"
    writing()
}
if (datetoday > date17_11_2023) {
    text = "Jour 4 : planter et arroser"
    writing()
}
if (datetoday > date18_11_2023) {
    text = "Jour 5 : Ajouter au potager, un carré de la biodiversité"
    writing()
}
if (datetoday > date19_11_2023) {
    text = "Jour 1 : planter ta plante ( ou apporter ta plante ) et l'arroser régulièrement"
    writing()
}
if (datetoday > date20_11_2023) {
    text = "Jour 2 : arroser ta plante"
    writing()
}
if (datetoday > date21_11_2023) {
    text = "Jour 3 : arroser ta plante"
    writing()
}
if (datetoday > date22_11_2023) {
    text = "Jour 4 : arroser ta plante"
    writing()
}
if (datetoday > date23_11_2023) {
    text = "Jour 5 : arroser ta plante"
    writing()
}