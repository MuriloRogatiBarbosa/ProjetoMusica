document.getElementById("musicForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const mood = document.querySelector('input[name="mood"]:checked');
    const tempo = document.querySelector('input[name="tempo"]:checked');
    const letra = document.querySelector('input[name="letra"]:checked');
    const epoca = document.querySelector('input[name="epoca"]:checked');
    const origem = document.querySelector('input[name="origem"]:checked');
