// Definir les variables
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("lenght"); // Correction ici pour correspondre à l'ID dans le HTML
var togglePsw = document.getElementById("togglePsw");
var eyeOpen = document.getElementById("eyeOpen");
var eyeClosed = document.getElementById("eyeClosed");

// Lorsque l'utilisateur clique sur le champ du mot de passe, afficher la boite message
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// Lorsque l'utilisateur clique en dehors du champ du mot de passe, masquer la boite message
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// Lorsque l'utilisateur commence a taper quelaue chose dans le champ mot de passe

myInput.onkeyup = function () {
  // valider les lettres minuscules
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    // Si le mot de passe contient une lettre minuscule, enlever la classe "invalide" et ajouter la classe "valid"
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    // sinon, enlever la classe "valid" et ajouter la classe "invalid"
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // valider les lettres majuscules
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    // Si le mot de passe contient une lettre majuscule, enlever la classe "invalide" et ajouter la classe "valid"
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    // sinon, enlever la classe "valid" et ajouter la classe "invalid"
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // valider les chiffre
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    // Si le mot de passe contient un chiffre, enlever la classe "invalide" et ajouter la classe "valid"
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    // sinon, enlever la classe "valid" et ajouter la classe "invalid"
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // valider la longueur

  if (myInput.value.length >= 8) {
    // Si le mot de passe contient minimun 8 caracteres, enlever la classe "invalide" et ajouter la classe "valid"
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    // sinon, enlever la classe "valid" et ajouter la classe "invalid"
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// Fonction pour afficher/masquer le mot de passe
togglePsw.onclick = function () {
  if (myInput.type === "password") {
    myInput.type = "text";
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";
  } else {
    myInput.type = "password";
    eyeOpen.style.display = "block";
    eyeClosed.style.display = "none";
  }
};
