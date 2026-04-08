const btn = document.getElementById("temaBtn");

btn.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
}

document.getElementById("form")?.addEventListener("submit", function(e){
    let nome = document.getElementById("nome")?.value;
    let email = document.getElementById("email")?.value;
    let mensagem = document.getElementById("mensagem")?.value;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        e.preventDefault();
    }
});

document.getElementById("ano").innerText = new Date().getFullYear();
