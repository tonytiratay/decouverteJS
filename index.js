// Salut tout le monde ;)
console.log('Hello world depuis le fichier index.js');

// Stocker dans des variables les éléments HTML sur lesquels je veux agir
var zoneDeSaisie = document.getElementById('zoneDeSaisie');
var zoneDeResultat = document.getElementById('zoneDeResultat');

// Remplir la zone d'inupt avec le contenu de la zone de resultat
zoneDeSaisie.value = zoneDeResultat.innerHTML;

// Déclarer la fonction à appeler dés qu'une touche sera relachée dans la zone de saisie
var mettreAJourLaZone = function () {
  zoneDeResultat.innerHTML = zoneDeSaisie.value;
};

zoneDeSaisie.onkeyup = mettreAJourLaZone;
