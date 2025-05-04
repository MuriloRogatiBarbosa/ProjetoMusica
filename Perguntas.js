document.getElementById("musicForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const mood = document.querySelector('input[name="mood"]:checked');
    const tempo = document.querySelector('input[name="tempo"]:checked');
    const letra = document.querySelector('input[name="letra"]:checked');
    const epoca = document.querySelector('input[name="epoca"]:checked');
    const origem = document.querySelector('input[name="origem"]:checked');

    if (!mood || !tempo || !letra || !epoca || !origem) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    const respostas = {
        mood: mood.value,
        tempo: tempo.value,
        letra: letra.value,
        epoca: epoca.value,
        origem: origem.value
    };

    function obterRecomendacoes(respostas) {
        const recomendacoes = [];

        // Lógica modificada para música brasileira
        if (respostas.mood === "feliz" && respostas.tempo === "agitada") {
            recomendacoes.push("Axé");
        }
        if (respostas.mood === "triste" && respostas.tempo === "calma") {
            recomendacoes.push("MPB");
        }
        if (respostas.letra === "instrumental") {
            recomendacoes.push("Choro");
        }
        if (respostas.epoca === "classico") {
            recomendacoes.push("Samba de Raiz");
        }
        if (respostas.origem === "internacional" && respostas.mood !== "triste") {
            recomendacoes.push("Sertanejo Universitário");
        }
        if (respostas.tempo === "agitada" && respostas.mood === "motivado") {
            recomendacoes.push("Funk Carioca");
        }

        // Resposta específica para "Nacional" como origem
        if (respostas.origem === "nacional") {
            if (respostas.mood === "feliz") recomendacoes.push("Samba");
            if (respostas.mood === "relaxado") recomendacoes.push("Bossa Nova");
            if (respostas.mood === "triste") recomendacoes.push("Forró");
        }

        return recomendacoes;
    }

    const estilos = obterRecomendacoes(respostas);

    const musicList = document.getElementById("musicList");
    musicList.innerHTML = "";

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
