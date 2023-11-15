let datetoday = new Date();
let date11_11_2023 = new Date(2023, 10, 11);

let date13_11_2023 = new Date(2023, 10, 13);
let date14_11_2023 = new Date(2023, 10, 14);
let date15_11_2023 = new Date(2023, 10, 15);
let date16_11_2023 = new Date(2023, 10, 16);
let date17_11_2023 = new Date(2023, 10, 17);
let date18_11_2023 = new Date(2023, 10, 18);

let date20_11_2023 = new Date(2023, 10, 20);
let date21_11_2023 = new Date(2023, 10, 21);
let date22_11_2023 = new Date(2023, 10, 22);
let date23_11_2023 = new Date(2023, 10, 23);
let date24_11_2023 = new Date(2023, 10, 24);
let date25_11_2023 = new Date(2023, 10, 25);

let date27_11_2023 = new Date(2023, 10, 27);
let date28_11_2023 = new Date(2023, 10, 28);
let date29_11_2023 = new Date(2023, 10, 29);
let date30_11_2023 = new Date(2023, 10, 30);
let date1_12_2023 = new Date(2023, 11, 1);
let date2_12_2023 = new Date(2023, 11, 2);

let date4_12_2023 = new Date(2023, 11, 4);
let date5_12_2023 = new Date(2023, 11, 5);
let date6_12_2023 = new Date(2023, 11, 6);
let date7_12_2023 = new Date(2023, 11, 7);
let date8_12_2023 = new Date(2023, 11, 8);
let date9_12_2023 = new Date(2023, 11, 9);

let date11_12_2023 = new Date(2023, 11, 11);
let date12_12_2023 = new Date(2023, 11, 12);
let date13_12_2023 = new Date(2023, 11, 13);
let date14_12_2023 = new Date(2023, 11, 14);
let date15_12_2023 = new Date(2023, 11, 15);
let date16_12_2023 = new Date(2023, 11, 16);

let date18_12_2023 = new Date(2023, 11, 18);
let date19_12_2023 = new Date(2023, 11, 19);
let date20_12_2023 = new Date(2023, 11, 20);
let date21_12_2023 = new Date(2023, 11, 21);
let date22_12_2023 = new Date(2023, 11, 22);
let date23_12_2023 = new Date(2023, 11, 23);

let date25_12_2023 = new Date(2023, 11, 25);
let date26_12_2023 = new Date(2023, 11, 26);
let date27_12_2023 = new Date(2023, 11, 27);
let date28_12_2023 = new Date(2023, 11, 28);
let date29_12_2023 = new Date(2023, 11, 29);
let date30_12_2023 = new Date(2023, 11, 30);

let date1_1_2024 = new Date(2024, 0, 1);
let date2_1_2024 = new Date(2024, 0, 2);
let date3_1_2024 = new Date(2024, 0, 3);
let date4_1_2024 = new Date(2024, 0, 4);
let date5_1_2024 = new Date(2024, 0, 5);
let date6_1_2024 = new Date(2024, 0, 6);

let date8_1_2024 = new Date(2024, 0, 8);
let date9_1_2024 = new Date(2024, 0, 9);
let date10_1_2024 = new Date(2024, 0, 10);
let date11_1_2024 = new Date(2024, 0, 11);
let date12_1_2024 = new Date(2024, 0, 12);
let date13_1_2024 = new Date(2024, 0, 13);

let text = ""
let link = ""
let semaine = ""
let badge = ""

function writing() {
    document.getElementById('p3').innerHTML = text;
    document.getElementById('p4').innerHTML = semaine;
    document.querySelector('.badge').src = badge;
    document.querySelector('.link').href = link;
}


if (datetoday > date11_11_2023) {
    badge = "element/image/b_eau.png"
    link = "element/image/b_eau.png"
    text = "Attent lundi pour que ça arrive"
    semaine = "Créer un petit potager à plein d’avantages, vous pouvez organiser au sein de la classe ou de la famille des petites activitées autour de ce dernier, pouvoir entraîner les enfants aux responsabilitées d’entretenir un petit potager est intéressant et ludique tout en sensibilisant à des gestes écologiques. En prime, quand les fruits et légumes auront poussé, vous pourrez organiser un délicieux goûter."
    writing()
}
if (datetoday > date13_11_2023) {
    text = "Jour1: Que mettre dans le potager ? Fruits de saison"
    writing()
}
if (datetoday > date14_11_2023) {
    text = "Jour2: Acheter les graines"
    writing()
}
if (datetoday > date15_11_2023) {
    text = "Jour 3 : préparer la terre"
    writing()
}
if (datetoday > date16_11_2023) {
    text = "Jour 4 : planter et arroser"
    writing()
}
if (datetoday > date17_11_2023) {
    text = "Jour 5 : Ajouter au potager, un carré de la biodiversité"
    writing()
}


if (datetoday > date18_11_2023) {
    badge = "element/image/b_plante.png";
    link = "element/image/b_plante.png"
    text = "Attent lundi pour que ça arrive"
    semaine = "Garder en vie une plante est un défi intéressant sur plusieurs points. Dans un premier temps, cela peut permettre de faire comprendre aux enfants comment marche la nature et les plantes qui nous entourent. Cela permet également aux enfants d'entraîner leur autonomie, de réussir à prendre soin d’un être vivant. Enfin, une fois qu’elle aura poussé, vous pourrez décorer votre salle de classe ou votre maison avec cette dernière !"
    writing()
}
if (datetoday > date20_11_2023) {
    text = "Jour 1 : planter ta plante ( ou apporter ta plante ) et l'arroser régulièrement"
    writing()
}
if (datetoday > date21_11_2023) {
    text = "Jour 2 : arroser ta plante"
    writing()
}
if (datetoday > date22_11_2023) {
    text = "Jour 3 : arroser ta plante"
    writing()
}
if (datetoday > date23_11_2023) {
    text = "Jour 4 : arroser ta plante"
    writing()
}
if (datetoday > date24_11_2023) {
    text = "Jour 5 : arroser ta plante"
    writing()
}

if (datetoday > date25_11_2023) {
    badge = "element/image/...";
    link = "element/image/..."
    text = "Attent lundi pour que ça arrive"
    semaine = "Ramasser et trier ses déchets devient un geste de plus en plus important de nos jours. Ainsi en sensibilisant les enfants à ces petits gestes, ils y seront habitués. L’avantage c’est qu’encore une fois nous encourageons l’autonomie de chacun par une action responsable, et cela contribue en plus à rendre la classe propre et travailler dans un lieu sain."
    writing()
}
if (datetoday > date27_11_2023) {
    text = "Jour 1 : créer un compost"
    writing()
}
if (datetoday > date28_11_2023) {
    text = "Jour 2 : ramasser des déchets autour de l'école"
    writing()
}
if (datetoday > date29_11_2023) {
    text = "Jour 3 : ramasser des déchets dans la ville, forêt ou parc"
    writing()
}
if (datetoday > date30_11_2023) {
    text = 'Jour 4 : créer une boite "Recup Papier"'
    writing()
}
if (datetoday > date1_12_2023) {
    text = "Jour 5 : découvrir le recyclage"
    writing()
}

if (datetoday > date2_12_2023) {
    badge = "element/image/...";
    link = "element/image/..."
    text = "Attent lundi pour que ça arrive"
    semaine = "Ce thème peut être constructif à faire, ici on sensibilise à plusieurs domaines : la santé, le gaspillage et l’écologie. En effectuant chaques défis, on permet aux enfant de s’habituer à effectuer ces actions chaque jours et prendre une bonne habitude, mais également prendre conscience des enjeux qui nous entourent. "
    writing()
}
if (datetoday > date4_12_2023) {
    text = "Jour 1 : manger une pomme et planter sa graine"
    writing()
}
if (datetoday > date5_12_2023) {
    text = "Jour 2 : Finis toutes tes assiettes"
    writing()
}
if (datetoday > date6_12_2023) {
    text = "Jour 3 : Ne pas manger de viande de la journée"
    writing()
}
if (datetoday > date7_12_2023) {
    text = "Jour 4 : Faire sa propre purée / compote"
    writing()
}
if (datetoday > date8_12_2023) {
    text = "Jour 5 : Aller acheter des oeufs dans une ferme locale"
    writing()
}

if (datetoday > date9_12_2023) {
    badge = "element/image/...";
    link = "element/image/..."
    text = "Attent lundi pour que ça arrive"
    semaine = "De nos jours, les énergies ont une grande place dans le quotidien, il est important d'être sensibilisé aux énergies renouvelables et à faire attention à sa consommation. En sensibilisant les élèves aux bons réflexes pour réduire leur empreinte énergétique on permet de créer des réflexes responsables qui les suivront toute leur vie."
    writing()
}
if (datetoday > date11_12_2023) {
    text = "Jour 1 : Eteint toujours la lumière derrière toi"
    writing()
}
if (datetoday > date12_12_2023) {
    text = "Jour 2 : Vient à l'école à vélo, à pied ou avec les transports en commun"
    writing()
}
if (datetoday > date13_12_2023) {
    text = "Jour 3 : Prend une douche de 5 min max"
    writing()
}
if (datetoday > date14_12_2023) {
    text = "Jour 4 : Faire un quizz sur  les énergies renouvelables"
    writing()
}
if (datetoday > date15_12_2023) {
    text = "Jour 5 : Passer une soirée sans utiliser d'électricité"
    writing()
}

if (datetoday > date9_12_2023) {
    badge = "element/image/...";
    link = "element/image/..."
    text = "Attent lundi pour que ça arrive"
    semaine = "Souvent les enfants adorent les animaux, ils aiment tant ces petites boules de poils, de plumes et d’écailles, ils sont si mignons à leurs yeux. Il est alors nécessaire qu’ils apprennent à les protéger et qu'ils prennent conscience que certains d’entre eux sont en danger. Les défis que nous proposons sont éducatifs car les enfants en apprennent plus sur les animaux, bricolent des objets intéressants, et prennent soin des animaux qui les entourent."
    writing()
}
if (datetoday > date11_12_2023) {
    text = "Jour 1 : Découvrez un nouvel animal"
    writing()
}
if (datetoday > date12_12_2023) {
    text = "Jour 2 : Bricoler un mangeoir"
    writing()
}
if (datetoday > date13_12_2023) {
    text = "Jour 3 : mettre une gamelle d'eau à l'extérieur de sa maison"
    writing()
}
if (datetoday > date14_12_2023) {
    text = "Jour 4 : créer un hotel à insecte"
    writing()
}
if (datetoday > date15_12_2023) {
    text = "Jour 5 : Se renseignez sur l'alimentation des animaux"
    writing()
}

if (datetoday > date16_12_2023) {
    badge = "element/image/...";
    link = "element/image/..."
    text = "Attent lundi pour que ça arrive"
    semaine = "Le plastique, ce fléau de notre siècle, tout le monde y a affaire au quotidien. Tout le monde en consomme énormément, les enfants aussi, ainsi, les sensibiliser sur son utilisation est nécessaire. C’est également intéressant car au fils des défis, les enfants vont devoir user de réflexion pour utiliser ou offrir des objets sans plastique."
    writing()
}
if (datetoday > date18_12_2023) {
    text = "Jour 1 : fabriquer un cadeau pour un proche sans plastique"
    writing()
}
if (datetoday > date19_12_2023) {
    text = "Jour 2 : amener une gourde à l'école"
    writing()
}
if (datetoday > date20_12_2023) {
    text = "Jour 3 : recycler ses pailles en plastique et ne plus en acheter"
    writing()
}
if (datetoday > date21_12_2023) {
    text = "Jour 4 : bricoler quelque chose avec des déchets"
    writing()
}
if (datetoday > date22_12_2023) {
    text = "Jour 5 : demander à ses parents d'acheter en vrac"
    writing()
}

if (datetoday > date23_12_2023) {
    link = "element/image/..."
    badge = "element/image/...";
    text = "Attent lundi pour que ça arrive"
    semaine = "Ce thème est intéressant car il permet aux enfants de découvrir un aspect de la vie d’aujourd’hui qu’ils ne connaissent pas forcément. En commençant par découvrir la seconde main et ses avantages mais aussi en apprenant le troc qui peut être une expérience sociale enrichissante pour les enfants."
    writing()
}
if (datetoday > date25_12_2023) {
    text = "Jour 1 : trier les vetements et jouets que tu n'utilises plus"
    writing()
}
if (datetoday > date26_12_2023) {
    text = "Jour 2 : mettre les vetements triés dans un point relais"
    writing()
}
if (datetoday > date27_12_2023) {
    text = "Jour 3 : acheter un vêtement d'occasion"
    writing()
}
if (datetoday > date28_12_2023) {
    text = "Jour 4 : découvre le troc, troquer un jouet avec un copain/copine"
    writing()
}
if (datetoday > date29_12_2023) {
    text = "Jour 5 : recycler un vetement troué"
    writing()
}

if (datetoday > date30_12_2023) {
    badge = "element/image/...";
    text = "Attent lundi pour que ça arrive"
    semaine = "Cette semaine, les enfants seront sensibilisés à la préservation des espèces menacées. En sensibilisant les enfants dès leur jeune âge, on les encourage à développer une conscience environnementale et cela leur permet de comprendre qu'ils ont un rôle à jouer dans la préservation de la nature. Ils apprennent que leurs actions quotidiennes peuvent avoir un impact positif sur la protection des espèces menacées. Ils comprenndront l'importance de préserver cette diversité pour maintenir l'équilibre de l'écosystème."
    writing()
}
if (datetoday > date1_1_2024) {
    text = "Jour 1 : désinez un animal en voie de disparition"
    writing()
}
if (datetoday > date2_1_2024) {
    text = "Jour 2 : désinez un autre animal en voie de disparition"
    writing()
}
if (datetoday > date3_1_2024) {
    text = "Jour 3 : désinez un autre animal en voie de disparition"
    writing()
}
if (datetoday > date4_1_2024) {
    text = "Jour 4 : désinez un autre animal en voie de disparition"
    writing()
}
if (datetoday > date5_1_2024) {
    text = "Jour 5 : désinez un autre animal en voie de disparition"
    writing()
}

if (datetoday > date6_1_2024) {
    link = "element/image/..."
    badge = "element/image/...";
    text = "Attent lundi pour que ça arrive"
    semaine = "Cette semaine d’apprentissage du recyclage va leur permettre de développer une conscience environnementale, de contribuer à la protection de l'environnement, de réduire les émissions de gaz à effet de serre, d'économiser des ressources naturelles et de favoriser une consommation responsable. Cela les forme en tant que futurs acteurs du changement et les aide à prendre des décisions éclairées pour préserver notre planète."
    writing()
}
if (datetoday > date8_1_2024) {
    text = "Jour 1 : mettre un seau dehors pour recycler l'eau de pluie"
    writing()
}
if (datetoday > date9_1_2024) {
    text = "Jour 2 : cuisiner les epluchures"
    writing()
}
if (datetoday > date10_1_2024) {
    text = "Jour 3 : faire une guirlande avec des bouchons de plastique"
    writing()
}
if (datetoday > date11_1_2024) {
    text = "Jour 4 : Gagner un concours de tri des déchets (mettre 4 bacs ) et devoir vite mettre les déchets dans le bon bac"
    writing()
}
if (datetoday > date12_1_2024) {
    text = "Jour 5 : Faire du papier maché avec journaux"
    writing()
}

if (datetoday > date13_1_2024) {
    link = "element/image/..."
    badge = "element/image/...";
    text = "Désoler lévenement est finis"
    semaine = ""
    writing()
}
