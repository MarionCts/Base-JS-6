// EXO 1

const couleurs = ["rouge", "vert", "bleu"];

couleurs.push("jaune");
couleurs.splice(0, 1);

for (let i = 0 ; i <= couleurs.length - 1; i++) {
    console.log(couleurs[i]);
}

// EXO 2

const nombres = [2 , 7, 10, 23, 42];
const comparateur = 10;

function verifierDix(tableau) {
    for (nombre of tableau) {
        if (nombres.includes(comparateur)) {
            return `10 est présent dans le tableau.`;
        } 
        return `10 n'est pas présent dans le tableau.`; 
        }
    }

console.log(`${verifierDix(nombres)}`);


// EXO 3

const ages = [12, 17, 22, 10, 34, 16];
const agesMajeurs = [];

function verifierAge(tableau) {
    for (age of tableau) {
        if (age >= 18) {
            agesMajeurs.push(age);
        }
    }
}

verifierAge(ages);

console.log(`${agesMajeurs}`);

// EXO 4

const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
const sruoj = [];

for (let i = jours.length - 1; i >= 0; i--) {
    sruoj.push(jours[i]);
}

console.log(sruoj);


// EXO 5

const notes = [15, 12, 17, 10, 8];
let somme = 0;

    for (let i = 0 ; i <= notes.length -1 ; i++) {
        somme += notes[i];
    }

console.log(somme);

// EXO 6

const livres = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

console.log(`Le livre "${livres.titre}" a été écrit par ${livres.auteur}.`);

livres.pages = 100;

livres.langue = "français"



// EXO 7

const personne = {
    nom: "Alice",
    age: 25,
    ville: "Paris"
};

for (let i = 0; i <= Object.entries(personne).length - 1; i++) {
    console.log(`${Object.keys(personne)[i]} : ${Object.values(personne)[i]}`);
}

// EXO 8

const etudiants = [
    {
        nom: "Leo",
        age: 24,
        note: 12
    },
    {
        nom: "Cecile",
        age: 20,
        note: 16
    },
    {
        nom: "Carla",
        age: 22,
        note: 14
    }
]

for (objet of etudiants) {
    console.log(`${objet.nom} : ${objet.note}/20`);
    
}

// EXO 9

function bonjour(nom) {
    console.log(`Bonjour ${nom} !`);
    
}

bonjour("Giulia");

// EXO 10

let nombreMystere = 3;

function carre(nombre) {
    return Math.pow(nombre, 2);
}

console.log(carre(nombreMystere));

nombreMystere = 5;

console.log(carre(nombreMystere));

// EXO 11

const numbers = [4, 7, 2, 9];
let sum = 0;

function sommeTableau(tableau) {

    for (let i = 0 ; i <= tableau.length -1 ; i++) {
        sum += tableau[i];
    }
    return sum;
}

console.log(sommeTableau(numbers));


// EXO 12

let moyenneAge = 16;

function estAdulte(age) {
    if (age < 18) {
            return "Mineur";
        }
    return "Adulte";
}

console.log(estAdulte(moyenneAge));

moyenneAge = 21;

console.log(estAdulte(moyenneAge));

moyenneAge = 12;

console.log(estAdulte(moyenneAge));

// EXO 13

const tousAges = [12, 17, 22, 10, 34, 16];
const agesAdultes = [];

function filtreAdultes(tableau) {
    for (key of tableau) {
        if (key >= 18) {
            agesAdultes.push(key);
        }
    }
}

filtreAdultes(tousAges);

console.log(agesAdultes);

// EXO 14-15

const etudiantes = [
    {
        nom: "Eleanor",
        note: 12
    },
    {
        nom: "Kady",
        note: 18
    },
    {
        nom: "Marc",
        note: 15
    },
    {
        nom: "Laurent",
        note: 16
    }
];

function trouverMeilleurEtudiant(tableau) {

    let meilleurEtudiant = tableau[0];

    for (objet of tableau) {
        if (objet.note > meilleurEtudiant.note) {
            meilleurEtudiant = objet;
        }
    }
    return meilleurEtudiant.nom;
}

console.log(`${trouverMeilleurEtudiant(etudiantes)}`);

// EXO 16

const mots = ["chat", "elephant", "oiseau"];

console.log(mots[0].length);

function motLePlusLong(tableau) {

    let lePlusLong = tableau[0];

    for (motLong of tableau) {
        if (motLong.length > lePlusLong.length) {
            lePlusLong = motLong;
        }
    }
    return lePlusLong;
}

console.log(`${motLePlusLong(mots)}`);
