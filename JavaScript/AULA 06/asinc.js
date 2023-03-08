const resposta = document.getElementById("resposta");

function requisicao() {
    resposta.innerText = "Aguarde, consultando..."

    consultarServidor()
}

function consultarServidor() {
    setTimeout(cb, 4000);
}

function cb() {
    resposta.innerText = " Resposta: "  = new Date().toDateString();
}