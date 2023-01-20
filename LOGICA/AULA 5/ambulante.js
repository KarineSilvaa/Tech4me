const prompt = require ("prompt-sync")();

console.log("Compre chocolate comigo! Qual o valor??");
var valor = prompt("Digite o valor: ");

var sem_centavos = Math.trunc(valor);

console.log("Pague so R$", sem_centavos);