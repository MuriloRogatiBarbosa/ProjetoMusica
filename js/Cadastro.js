document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria objeto usuário
    const usuario = {
        nome: name,
        email: email,
        senha: password  // Só pra exemplo; em app real nunca salvar senha assim!
    };

    // Converte objeto para JSON e salva
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Redireciona para página de apresentação
    window.location.href = "../Apresentacao.html";
});
