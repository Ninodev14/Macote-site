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