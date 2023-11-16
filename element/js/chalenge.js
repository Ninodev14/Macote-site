let datetoday = new Date();

let date9_11_2023 = new Date(2023, 10, 10);
let date10_11_2023 = new Date(2023, 10, 10);
let date11_11_2023 = new Date(2023, 10, 11);
let date12_11_2023 = new Date(2023, 10, 12);

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

let date15_1_2024 = new Date(2024, 0, 15);
let date16_1_2024 = new Date(2024, 0, 16);
let date17_1_2024 = new Date(2024, 0, 17);
let date18_1_2024 = new Date(2024, 0, 18);
let date19_1_2024 = new Date(2024, 0, 19);
let date20_1_2024 = new Date(2024, 0, 20);

let text = ""
let link = ""
let semaine = ""
let badge = ""
let jour = ""
let theme = ""
let semainedate = ""
let semainechiffre = ""
let resumer = ""
let objectif =""

function writing() {
    document.getElementById('p3').innerHTML = text;
    document.getElementById('p4').innerHTML = semaine;
    document.querySelector('.badge').src = badge;
    document.querySelector('#link').href = link;
    document.querySelector('.jour').innerHTML = jour;
    document.querySelector('#themechoix').innerHTML = theme;
    document.querySelector('.semaine').innerHTML = semainedate; 
    document.querySelector('.semainechiffre').innerHTML = semainechiffre; 
    document.querySelector('.resumer').innerHTML = resumer;
    document.querySelector('.objectifs').innerHTML = objectif;
}



tabObjectif = [
    "Objectif de la semaine : <span>Créer un potager</span>"
    ,
    "Objectif de la semaine : <span>Garder en vie sa plante pendant une semaine</span>"
    ,
    "Objectif de la semaine : <span>Ramasser et trier ses déchets</span>"
    ,
    "Objectif de la semaine : <span>Manger sain et bio</span>"
    ,
    "Objectif de la semaine : <span>Faire attention à sa consommation énergétique</span>"
    ,
    "Objectif de la semaine : <span>Protéger les animaux</span>"
    ,
    "Objectif de la semaine : <span>Limiter sa consommation plastique</span>"
    ,
    "Objectif de la semaine : <span>Faire du troc, et de l'occasion</span>"
    ,
    "Objectif de la semaine : <span>Découvrir des animaux en voie de disparition</span>"
    ,
    "Objectif de la semaine : <span>Apprendre à recycler</span>"
]

tabResumer = [
    "Lundi: Nous allons réfléchir à la composition du potager <br><br> Mardi: Acheter les graines <br><br> Mercredi: Préparer le sol, <br><br> Jeudi/Vendredi: Planter et arroser tout ça !"
    ,
    "Lundi: nous allons planter une graine dans un petit pot <br><br> Tout le reste de la semaine: le défi sera d’arroser sa plante et d’en prendre soin"
    ,
    "Lundi: Nous allons créer un compost <br><br> Mardi: Ramasser les déchets autour de l’école et les trier <br><br> Mercredi: Ramasser des déchets dans la ville, la forêt ou le parc <br><br> Jeudi: Créer un “Recup’Papier” <br><br> Vendredi: Nous allons découvrir ce qu’est le recyclage."
    ,
    "Lundi: nous allons manger une pomme et planter sa graine <br><br> Mardi: Il faudra finir toute son assiettes aux repas <br><br> Mercredi: On ne va pas manger de viande de la journée <br><br> Jeudi: Faire sa propre purée / compote <br><br> Vendredi: Nous allons acheter des oeufs dans une ferme locale"
    ,
    "Lundi: le défi sera de toujours éteindre la lumière derrière soi <br><br> Mardi: il faudra venir à l'école à vélo, à pied ou avec les transports en commun <br><br> Mercredi: le défi sera de prendre une douche de 5 min max <br><br> Jeudi: De gagner à un quizz sur les énergies renouvelables <br><br> Vendredi: Vous essayerez de passer une soirée sans utiliser d’électricité"
    ,
    "Lundi: les enfants vont devoir découvrir un nouvel animal <br><br> Mardi: Bricoler une mangeoir <br><br> Mercredi: Mettre une gamelle d'eau à l'extérieur de sa maison pour les animaux vivant dehors <br><br> Jeudi: Créer un hôtel à insecte <br><br> Vendredi: Ils vont devoir se renseigner sur l’alimentation de nos animaux"
    ,
    "Lundi: le défi sera de fabriquer un cadeau à un proche, sans plastique <br><br> Mardi: de venir avec une gourde à l’école <br><br> Mercredi: De recycler ses pailles en plastique et ensuite ne plus en acheter <br><br> Jeudi: Bricoler quelque chose avec des déchets <br><br> Vendredi: Ils devront demander à leurs parents d’acheter plus en vrac"
    ,
    "Lundi: les enfants vont trier les vêtements et jouets qu’ils n’utilisent plus <br><br> Mardi: Donner ses vetements dans un Relais <br><br> Mercredi: Acheter un vêtement d’occasion <br><br> Jeudi: découvre le troc et troquer un jouet avec un copain/copine <br><br> Vendredi: Il vont recycler un vêtement troué"
    ,
    "Tout au long de la semaine: les enfants vont découvre tout un panel d’animaux en voie de disparition en les dessinant"
    ,
    "Lundi: les enfants vont mettre des seaux à l’exterieur pour recycler l’eau de pluie <br><br> Mardi: Apprendre à cuisiner les épluchures <br><br> Mercredi: Ils devront faire une guirlande avec des bouchons plastiques <br><br> Jeudi: Ils vont participer à un concours de tri des déchets <br><br> Vendredi: Il faudra faire du papier mâcher avec des journaux"
]

tabSemainechiffre = [
    "Lundi 13 février 2024 au Vendredi 17 février 2024"
    ,
    "Lundi 20 novembre 2023 au Vendredi 24 novembre 2023"
    ,
    "Lundi 27 novembre 2023 au Vendredi 01 décembre 2023"
    ,
    "Lundi 04 décembre 2023 au Vendredi 08 décembre 2023"
    ,
    "Lundi 11 décembre 2023 au Vendredi 15 décembre 2023" 
    ,
    "Lundi 18 décembre 2023 au Vendredi 22 décembre 2023"
    ,
    "Lundi 08 janvier 2024 au Vendredi 12 janvier 2024"
    ,
    "Lundi 15 janvier 2024 au Vendredi 19 janvier 2024"
    ,
    "Lundi 22 janvier 2024 au Vendredi 26 janvier 2024"
    ,
    "Lundi 29 janvier 2024 au Vendredi 02 février 2024"
]

tabSemainedate = [
    "Semaine 46"
    ,
    "Semaine 47"
    ,
    "Semaine 48"
    ,
    "Semaine 49"
    ,
    "Semaine 50"
    ,
    "Semaine 51"
    ,
    "Semaine 52"
    ,
    "Semaine 1"
    ,
    "Semaine 2"
    ,
    "Semaine 3"
]


tabThemechoix = [
    "<span>Thème :</span>Jardinage"
    ,
    "<span>Thème :</span>Jardinage"
    ,
    "<span>Thème :</span>Environnement"
    ,
    "<span>Thème :</span>Alimentation"
    ,
    "<span>Thème :</span>Consommation énergétique"
    ,
    "<span>Thème :</span>Animaux"
    ,
    "<span>Thème :</span>Environnement"
    ,
    "<span>Thème :</span>Occasion, Seconde Main"
    ,
    "<span>Thème :</span>Animaux"
    ,
    "<span>Thème :</span>Recyclage"
    
]


tabJour = [
    "Weekend", "Jour 1", "Jour 2", "Jour 3", "Jour 4", "Jour 5" 
]


tabWeek = [
    "Créer un petit potager à plein d’avantages, vous pouvez organiser au sein de la classe ou de la famille des petites activitées autour de ce dernier, pouvoir entraîner les enfants aux responsabilitées d’entretenir un petit potager est intéressant et ludique tout en sensibilisant à des gestes écologiques. En prime, quand les fruits et légumes auront poussé, vous pourrez organiser un délicieux goûter."
    ,
    "Garder en vie une plante est un défi intéressant sur plusieurs points. Dans un premier temps, cela peut permettre de faire comprendre aux enfants comment marche la nature et les plantes qui nous entourent. Cela permet également aux enfants d'entraîner leur autonomie, de réussir à prendre soin d’un être vivant. Enfin, une fois qu’elle aura poussé, vous pourrez décorer votre salle de classe ou votre maison avec cette dernière !"
    ,
    "Ramasser et trier ses déchets devient un geste de plus en plus important de nos jours. Ainsi en sensibilisant les enfants à ces petits gestes, ils y seront habitués. L’avantage c’est qu’encore une fois nous encourageons l’autonomie de chacun par une action responsable, et cela contribue en plus à rendre la classe propre et travailler dans un lieu sain."
    ,
    "Ce thème peut être constructif à faire, ici on sensibilise à plusieurs domaines : la santé, le gaspillage et l’écologie. En effectuant chaques défis, on permet aux enfant de s’habituer à effectuer ces actions chaque jours et prendre une bonne habitude, mais également prendre conscience des enjeux qui nous entourent. "
    ,
    "De nos jours, les énergies ont une grande place dans le quotidien, il est important d'être sensibilisé aux énergies renouvelables et à faire attention à sa consommation. En sensibilisant les élèves aux bons réflexes pour réduire leur empreinte énergétique on permet de créer des réflexes responsables qui les suivront toute leur vie."
    ,
    "Souvent les enfants adorent les animaux, ils aiment tant ces petites boules de poils, de plumes et d’écailles, ils sont si mignons à leurs yeux. Il est alors nécessaire qu’ils apprennent à les protéger et qu'ils prennent conscience que certains d’entre eux sont en danger. Les défis que nous proposons sont éducatifs car les enfants en apprennent plus sur les animaux, bricolent des objets intéressants, et prennent soin des animaux qui les entourent."
    ,
    "Le plastique, ce fléau de notre siècle, tout le monde y a affaire au quotidien. Tout le monde en consomme énormément, les enfants aussi, ainsi, les sensibiliser sur son utilisation est nécessaire. C’est également intéressant car au fils des défis, les enfants vont devoir user de réflexion pour utiliser ou offrir des objets sans plastique."
    ,
    "Ce thème est intéressant car il permet aux enfants de découvrir un aspect de la vie d’aujourd’hui qu’ils ne connaissent pas forcément. En commençant par découvrir la seconde main et ses avantages mais aussi en apprenant le troc qui peut être une expérience sociale enrichissante pour les enfants."
    ,
    "Cette semaine, les enfants seront sensibilisés à la préservation des espèces menacées. En sensibilisant les enfants dès leur jeune âge, on les encourage à développer une conscience environnementale et cela leur permet de comprendre qu'ils ont un rôle à jouer dans la préservation de la nature. Ils apprennent que leurs actions quotidiennes peuvent avoir un impact positif sur la protection des espèces menacées. Ils comprenndront l'importance de préserver cette diversité pour maintenir l'équilibre de l'écosystème."
    ,
    "Cette semaine d’apprentissage du recyclage va leur permettre de développer une conscience environnementale, de contribuer à la protection de l'environnement, de réduire les émissions de gaz à effet de serre, d'économiser des ressources naturelles et de favoriser une consommation responsable. Cela les forme en tant que futurs acteurs du changement et les aide à prendre des décisions éclairées pour préserver notre planète."
]

tabBadge = [
"element/image/badge_Jardinage.png"
,
"element/image/badge_Jardinage.png"
,
"element/image/Badge_Recyclage.png"
,
"element/image/Badge_Alimentation.png"
,
"element/image/badge_ConsommationEnergetique.png"
,
"element/image/Badge_Animaux.png"
,
"element/image/b_plante.png"
,
"element/image/element/image/badge-occasion.png"
,
"element/image/Badge_Animaux.png"
,
"element/image/element/image/badge_Reciclage.png"
]

tabTextWeek = [
["Attends lundi pour que ça arrive", "Que mettre dans le potager ? Fruits de saison", "Acheter les graines", " Préparer la terre", " Planter et arroser", "Ajouter au potager, un carré de la biodiversité" ]
,
["Attends lundi pour que ça arrive", "Planter ta plante ( ou apporter ta plante ) et l'arroser régulièrement", "Arroser ta plante" , " Arroser ta plante"," Arroser ta plante", "Arroser ta plante" ]
,
["Attends lundi pour que ça arrive", "Créer un compost", "Ramasser des déchets autour de l'école" , " Ramasser des déchets dans la ville, forêt ou parc" , ' Créer une boite "Recup Papier"', "Découvrir le recyclage"]
,
["Attends lundi pour que ça arrive", "Manger une pomme et planter sa graine", "Finis toutes tes assiettes", " Ne pas manger de viande de la journée", " Faire sa propre purée / compote", "Aller acheter des oeufs dans une ferme locale"  ]
,
["Attends lundi pour que ça arrive", "Eteint toujours la lumière derrière toi", "Vient à l'école à vélo, à pied ou avec les transports en commun", " Prend une douche de 5 min max" , " Faire un quizz sur  les énergies renouvelables" , "Passer une soirée sans utiliser d'électricité" ]
,
["Attends lundi pour que ça arrive", "Découvrez un nouvel animal" , "Bricoler un mangeoir" , " Mettre une gamelle d'eau à l'extérieur de sa maison" , " Créer un hotel à insecte" , "Se renseignez sur l'alimentation des animaux" ]
,
["Attends lundi pour que ça arrive", "Fabriquer un cadeau pour un proche sans plastique" , "Amener une gourde à l'école" , " Recycler ses pailles en plastique et ne plus en acheter" , " Bricoler quelque chose avec des déchets" , "Demander à ses parents d'acheter en vrac"]
,
["Attends lundi pour que ça arrive", "Trier les vetements et jouets que tu n'utilises plus" , "Mettre les vetements triés dans un point relais" ,  " Acheter un vêtement d'occasion" , " Découvre le troc, troquer un jouet avec un copain/copine" , "Recycler un vetement troué" ]
,
["Attends lundi pour que ça arrive", "Désinez un animal en voie de disparition", "Désinez un autre animal en voie de disparition" , " Désinez un autre animal en voie de disparition" , " Désinez un autre animal en voie de disparition" , "Désinez un autre animal en voie de disparition" ]
,
["Attends lundi pour que ça arrive", "Mettre un seau dehors pour recycler l'eau de pluie" , "Cuisiner les epluchures" , " Faire une guirlande avec des bouchons de plastique" , " Gagner un concours de tri des déchets (mettre 4 bacs ) et devoir vite mettre les déchets dans le bon bac" , "Faire du papier maché avec journaux" ]
]


tabDate = [
    [date11_11_2023, date13_11_2023, date14_11_2023, date15_11_2023, date16_11_2023, date17_11_2023]
    ,
    [date18_11_2023, date20_11_2023, date21_11_2023, date22_11_2023, date23_11_2023, date24_11_2023]
    ,
    [date25_11_2023, date27_11_2023, date28_11_2023, date29_11_2023, date30_11_2023, date1_12_2023]
    ,
    [date2_12_2023, date4_12_2023, date5_12_2023, date6_12_2023, date7_12_2023, date8_12_2023]
    ,
    [date9_12_2023, date11_12_2023, date12_12_2023, date13_12_2023, date14_12_2023, date15_12_2023]
    ,
    [date16_12_2023, date18_12_2023, date19_12_2023, date20_12_2023, date21_12_2023, date22_12_2023]
    ,
    [date23_12_2023, date25_12_2023, date26_12_2023, date27_12_2023, date28_12_2023, date29_12_2023]
    ,
    [date30_12_2023, date1_1_2024, date2_1_2024, date3_1_2024, date4_1_2024, date5_1_2024]
    ,
    [date6_1_2024, date8_1_2024, date9_1_2024, date10_1_2024, date11_1_2024, date12_1_2024]
    ,
    [date13_1_2024, date15_1_2024, date16_1_2024, date17_1_2024, date18_1_2024, date19_1_2024]
    ,
    [date20_1_2024]
]
    function infoDate(i) {
        if (datetoday > tabDate[i][0]) {
            badge = tabBadge[i]
            link = tabBadge[i]
            text = tabTextWeek[i][0]
            theme = tabThemechoix [i]
            semaine = tabWeek[i]
            jour = tabJour[0]
            semainedate = tabSemainedate[i]
            semainechiffre = tabSemainechiffre[i]
            resumer = tabResumer[i]
            objectif = tabObjectif[i]
            writing()
        }
        if (datetoday > tabDate[i][1]) {
            text =  tabTextWeek[i][1]
            jour = tabJour[1]
            writing()
        }
        if (datetoday > tabDate[i][2]) {
            text = tabTextWeek[i][2]
            jour = tabJour[2]
            writing()
        }
        if (datetoday > tabDate[i][3]) {
            text = tabTextWeek[i][3]
            jour = tabJour[3]
            writing()
        }
        if (datetoday > tabDate[i][4]) {
            text = tabTextWeek[i][4]
            jour = tabJour[4]
            writing()
        }
        if (datetoday > tabDate[i][5]) {
            text = tabTextWeek[i][5]
            jour = tabJour[5]
            writing()
        }
    }
for (let i = 0; i < 10; i++) {
    infoDate(i)
}
if (datetoday > date20_1_2024) {
    link = "element/image/..."
    badge = "element/image/...";
    text = "Désolé l'évènement est fini"
    semaine = ""
    writing()
}