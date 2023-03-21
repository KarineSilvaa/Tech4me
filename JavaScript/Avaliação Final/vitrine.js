// Validação do Email
function validarEmail() {
    let email = document.getElementById("email").value;
    if (email == "") {
      alert("Por favor, digite um e-mail");
      return false;
    }
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Por favor, digite um e-mail válido");
      return false;
    }
    alert("O e-mail é valido!");
    return true;
} 

// Termos de uso
const checkbox = document.getElementById("terms");
const errorMsg = document.getElementById("error-msg");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    errorMsg.style.display = "none";
    checkbox.style.backgroundColor = "transparent";
  } else {
    alert("Aceita os termos de uso!")
    errorMsg.style.display = "block";
    checkbox.style.backgroundColor = "#FF0000";
  }
});
