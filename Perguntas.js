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

