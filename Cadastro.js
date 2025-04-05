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
});ocument.getElementById("musicForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtém as respostas do formulário
    const mood = document.querySelector('input[name="mood"]:checked');
    const tempo = document.querySelector('input[name="tempo"]:checked');
    const letra = document.querySelector('input[name="letra"]:checked');
    const epoca = document.querySelector('input[name="epoca"]:checked');
    const origem = document.querySelector('input[name="origem"]:checked');

    // Verifica se todas as perguntas foram respondidas
    if (!mood || !tempo || !letra || !epoca || !origem) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    // Cria um objeto com as respostas
    const respostas = {
        mood: mood.value,
        tempo: tempo.value,
        letra: letra.value,
        epoca: epoca.value,
        origem: origem.value
    };

    // Função que vai recomendar estilos com base nas respostas
    function obterRecomendacoes(respostas) {
        const recomendacoes = [];

        // Condições fictícias de recomendações
        if (respostas.mood === "feliz" && respostas.tempo === "agitada") {
            recomendacoes.push("Pop");
        }
        if (respostas.mood === "triste" && respostas.tempo === "calma") {
            recomendacoes.push("MPB");
        }
        if (respostas.letra === "instrumental") {
            recomendacoes.push("Jazz");
        }
        if (respostas.epoca === "classico") {
            recomendacoes.push("Clássica");
        }
        if (respostas.origem === "internacional") {
            recomendacoes.push("Rock Internacional");
        }
        if (respostas.tempo === "agitada" && respostas.mood === "motivado") {
            recomendacoes.push("Eletrônica");
        }

        return recomendacoes;
    }

    // Obter as recomendações com base nas respostas
    const estilos = obterRecomendacoes(respostas);

    // Exibir as recomendações
    const musicList = document.getElementById("musicList");
    musicList.innerHTML = ""; // Limpa a lista anterior

    if (estilos.length > 0) {
        estilos.forEach(estilo => {
            const li = document.createElement("li");
            li.textContent = estilo;
            musicList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "Não encontramos recomendações para o seu perfil.";
        musicList.appendChild(li);
    }
});

