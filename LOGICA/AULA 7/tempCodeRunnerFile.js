var total = 0;

const prompt = require("prompt-sync")();

var aposta = 0; 

do {
    var texto = prompt("Valor da sua aposta? ");
    aposta = parseFloat(texto);

    if (aposta > 0) total = total + aposta;
} while (aposta > 0);

console.log("O ganhador vai faturar", total);