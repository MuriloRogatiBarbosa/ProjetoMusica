document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    window.location.href = "../Apresentacao.html";
});
