function validateForm() {
    var password = document.getElementById("password").value;
  
    // Expression régulière pour vérifier la force du mot de passe
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$");
  
    if (!strongRegex.test(password)) {
      document.getElementById("password-error").style.display = "block";
      return false;
    } else {
      document.getElementById("password-error").style.display = "none";
      return true;
    }
  }
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  
  var questionButton = document.getElementById("questionButton");
  var questionnaire = document.getElementById("questionnaire");
  
  questionButton.addEventListener("mouseover", function() {
    questionnaire.style.display = "block";
  });
  
  questionButton.addEventListener("mouseout", function() {
    questionnaire.style.display = "none";
  });