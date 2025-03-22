document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    if (name === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    window.location.href = "Perguntas.html";
});
