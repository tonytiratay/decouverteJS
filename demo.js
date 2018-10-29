// Afficher du contenu dans la console
console.log('Hello World depuis le fichier index.js!');

// Les variables peuvent contenir tous type de contenu (data types).
// Par exemple:
// String (chaine de caractères)
var monPrenom = 'Tony';
var jolieSeparation = '---------------------------------------';

console.log(jolieSeparation);

// Number
var monAge = 33;
var monAgeMental = 18;

// Boolean (vrai ou faux)
var jeSuisDrole = false;

// Array (tableau)
var mesInterets = ['code', 'javascript', 'video', 'manger'];

// Object (ensemble de clé / valeur)
var superHeroine = {
  prenom: 'Ada', // Key: prenom, Value: Ada
  nom: 'Lovelace',
  metier: 'Développeuse',
};

// function

// Fonction sans paramètres

var direBonjour = function () {
  console.log('Salut !');
};

// Fonction avec paramètres

var sePresenter = function (prenom, age, ageMental, interets) {

  // Une fonction peut prendre des paramètres (entre les parenthèses ci dessus)
  // afin d'en faire, ou non, quelque chose
  console.log('Salut, je suis ' + prenom + '!');

  // exemple: "Salut, je suis Tony!"
  console.log("J'ai " + age + ' ans dans mon corps,');

  // exemple: "J'ai 33 ans dans mon corps,""
  console.log('mais ' + ageMental + ' dans ma tête...');

  // exemple: "mais 18 dans ma tête...""
  console.log('Mes intérêts sont au nombre de ' + interets.length);

  // exemple: "Mes intérêts sont au nombre de 2"
};

// Pour utiliser une fonction, il suffit de l'appeler avec
// une paire de parenthèses à la fin

direBonjour();

// Pour l'appeler en lui donnant des paramètres, même chose
// en lui passant les paramètres à l'intérieur des paramètres

sePresenter('Michel', 41, 87, ['Raler', 'Faire des blagues douteuses']);

console.log(jolieSeparation);

// Les paramètres peuvent aussi être des variables

sePresenter(monPrenom, monAge, monAgeMental, mesInterets);

console.log(jolieSeparation);

// Les objets peuvent contenir dans leurs propriétés la même chose que les variables
// Pour accéder au contenu d'une propriété de l'objet, depuis l'objet, on utilise "this"
// Dans ce contexte, "this" représente l'objet lui même

var monChien = {
  prenom: 'Maia',
  age: 18,
  uniteAge: 'mois',
  direBonjour: function () { // Une fonction dans un objet est appelée "method"
    console.log('Wouaf, je suis ' + this.prenom);
    console.log("et j'ai " + this.age + ' ' + this.uniteAge + '!');
  },
};

// Pour accéder à une propriété d'objet

console.log(monChien.prenom); // Affiche "Maia"
monChien.direBonjour(); // Appel la méthode (fonction) direBonjour de l'objet
