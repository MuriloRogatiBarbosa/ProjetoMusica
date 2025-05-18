document.addEventListener("DOMContentLoaded", function() {
  const usuarioJSON = localStorage.getItem("usuario");
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (usuarioJSON) {
    const usuario = JSON.parse(usuarioJSON);
    userNameDisplay.textContent = usuario.nome;
  } else {
    userNameDisplay.textContent = "";
  }
});
