const div = document.getElementById("relogio");

function escrever() {
    const agora = new Date();
    div.innerText = agora.toLocaleTimeString();
}

escrever();

const id = setInterval(escrever, 1000);

function disparadora(callback) {
    console.log("fui acionada");
    callback();
}

disparadora(function() {
    console.log("função anonima chamada");
});