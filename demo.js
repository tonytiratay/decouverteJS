// Je stocke dans des variable les éléments HTML
// Je trouve ces éléments HTML grâce à leur Id.
// Ex. zoneDeSaisie, contenuHTML
//la raclette c'est la vie!
var app = {
  init: function() {
      //Ici j'utilise des parenthèses car j'appelle la fonction.
      // Je veux qu'elle soit executée tout de suite
      app.mettreAJourZoneSaisie(); 
      // var coincee = "je suis pas accessivble en dehors d'init";
      // J'écoute sur la zoneDeSaisie l'événement "onkeyup"
      // Cet événement est déclenché dés qu'un
      // utilisateur relache une touche.
      // J'assigne la fonction mettreAJourLaDiv comme
      // fonction à executer
      // lorsque l'événement est détecté
      
      // Ici j'utilise app.mettreAJourLaDiv sans parenthèses. Elle n'est pas executée tout de suite.
      // Mais l'écouteur d'événement key up l'executera lui-meme à chaque événement
      app.zoneDeSaisie.onkeyup = app.mettreAJourLaDiv; 
      // zoneDeSaisie.addEventListener('onKeyUp', mettreAJourLaDiv);
      //varQuiRepresenteUnElementduDOM.nomDelEvent = nomDeLaVariableOuEstMaFonction
    }, 

    mettreAJourZoneSaisie: function(){
      app.zoneDeSaisie = document.getElementById('input');
      app.contenuHTML = document.getElementById('contenuHTML');
      app.zoneDeSaisie.value = app.contenuHTML.innerHTML;
  },


  mettreAJourLaDiv: function (param) {
    // console.log(param)
      // Je crée une fonction qui met à jour
      // le contenu de la div "contenuHTML"
      // en y insérant le contenu de l'input "zoneDeSaisie"
    app.contenuHTML.innerHTML = app.zoneDeSaisie.value;
  }
 
}

// var app2 = {};
// app2.init = function(){

// };



// var app = {
//   init: function(){

//   }
// };

document.addEventListener('DOMContentLoaded', app.init);


// Les callbacks

// Un callback c'est une fonction passée en paramètre à une autre fonction.
// Exemple: la fonction passée à un event listener;


// Le callback - La fonction a appeler
var direBonjour = function(name){
  console.log('Hello ' + name);
};

// La fonction qui utilise le callback
var direBonjourTony = function(direBonjour){
  callback("Tony");
};

function nomDeLafonction(){

}

direBonjourTony(callback);
// Renvoie "Hello Tony" en console
