document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria objeto usuário para JSON
    const usuario = {
        nome: name,
        email: email,
    };

    // Converte objeto para JSON e salva o nome do usuario
    localStorage.setItem("usuario", JSON.stringify(usuario));

    window.location.href = "../Apresentacao.html";
});
