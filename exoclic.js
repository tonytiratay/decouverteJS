var app = {
    init: function() {
      /*
       * Init
       */
      // Je récupère mon formulaire
      var form = document.getElementById('colors-form');
  
      // On pose l'écouteur d'évenement
      form.addEventListener('submit', app.addColor);
    },
    // Handler pour ajouter une couleur
    addColor: function(event) {
      // On arrête le comportement par défaut
      // pour éviter le rechargement de la page
      event.preventDefault();
  
      // Je récupére l'input
      var value = app.getValue();
  
      // Test
      if (app.testColor(value)) {
        // Oui, c'est une couleur, donc je l'affiche
        app.displayColor(value);
        console.log(value);
        // app.displayError('');
      } else {
        // Non, ce n'est pas une couleur, donc j'affiche une erreur
        app.displayError('ceci n\'est pas une couleur');
      }
      
  
      // On reset
      app.resetInput();
    },
    // Récupère la valeur de l'input
    getValue: function() {
      // Je récupére l'input
      var input = document.getElementById('colors-input');
  
      // Je récupére la valeur de l'input
      return input.value;
    },
    // Teste si la value donnée en argument est une couleur
    testColor: function(value) {
      // Est-ce que ça commence par un dièse ?
      var startWithHash = value.indexOf('#') === 0;
  
      // Est-ce que ça fait 4 ou 7 caractères ?
      var lengthOk = value.length === 4 || value.length === 7;
  
      // On peut écrire un if avec un else...
      // Renvoie un booléen
      // if (startWithHash && lengthOk) {
      //   return true;
      // }
      // else {
      //   return false;
      // }
  
      // ...ou alors juste le if sans else (même effet)...
      // Pas besoin du else !
      // if (startWithHash && lengthOk) {
      //   return true;
      // }
      // return false;
  
      /// .. ou alors se contenter de cette ligne ! Eh oui !
      // Pas besoin du if non plus !
      return startWithHash && lengthOk;
    },
    // Réinitialiser l'input
    resetInput: function() {
      // Je récupère l'input
      var input = document.getElementById('colors-input');
  
      // Je le vide
      input.value = '';
  
      // Je l'active
      input.focus();
    },
    // Affiche la couleur dans le <ul>
    displayColor: function(color) {
      // Puis de créer un <li>
      var li = document.createElement('li');
  
      // Puis de mettre la valeur de l'input dans ce <li>
      li.textContent = color;
  
      // Je rajoute de la couleur
      li.style.color = color;
  
      // Je récupère mon <ul>
      var ul = document.getElementById('colors-list');
  
      // Enfin, d'ajouter ce <li> à notre <ul>
      ul.appendChild(li);
    },
    // Affiche une erreur
    displayError: function(errorMessage) {
      // Je récupère la div error
      var error = document.getElementById('colors-error');
  
      // On affiche l'erreur
      error.textContent = errorMessage;
    }
  };
  
  document.addEventListener('DOMContentLoaded', app.init);


  // Sur quels éléments HTML est-ce que je veux agir
  // Je crée une propriété par élément sur lequel je veux agir

  // J'ai besoin d'identifier quelles opérations je veux faire sur ces éléments
  // Par exemple, récupérer du contenu, remplacer du contenu, incrémenter etc....
  // Je crée une  une méthode par fonction dont j'ai besoin

  // Dans app.init, 
  // 1 - Je déclare les propriétés dont j'ai besoin dés le début
  // 2 - j'appelle les méthodes dans l'ordre ou j'en ai besoin



