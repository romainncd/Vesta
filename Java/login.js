function validateForm() {
    var password = document.getElementById("password").value;
  
    // Expression régulière pour vérifier la force du mot de passe
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  
    if (!strongRegex.test(password)) {
      alert("Le mot de passe doit contenir au moins une majuscule, un caractère spécial, un chiffre et avoir au moins 8 caractères.");
      return false;
    }
    return true;
  }
  
  var questionButton = document.getElementById("questionButton");
  var questionnaire = document.getElementById("questionnaire");
  
  questionButton.addEventListener("mouseover", function() {
    questionnaire.style.display = "block";
  });
  
  questionButton.addEventListener("mouseout", function() {
    questionnaire.style.display = "none";
  });