// Je stocke dans des variable les éléments HTML
// Je trouve ces éléments HTML grâce à leur Id.
// Ex. zoneDeSaisie, contenuHTML

var zoneDeSaisie = document.getElementById('input');
var contenuHTML = document.getElementById('contenuHTML');

// Je rempli zoneDeSaisie avec le contenu
// de la div "contenuHTML"

zoneDeSaisie.value = contenuHTML.innerHTML;

// Je crée une fonction qui met à jour
// le contenu de la div "contenuHTML"
// en y insérant le contenu de l'input "zoneDeSaisie"

var mettreAJourLaDiv = function () {
  contenuHTML.innerHTML = zoneDeSaisie.value;
};

// J'écoute sur la zoneDeSaisie l'événement "onkeyup"
// Cet événement est déclenché dés qu'un
// utilisateur relache une touche.
// J'assigne la fonction mettreAJourLaDiv comme
// fonction à executer
// lorsque l'événement est détecté

zoneDeSaisie.onkeyup = mettreAJourLaDiv;
