const prompt = require("prompt-sync")();

var avaliacoes = [];
var nota;

while (true) {
  nota = prompt("Digite uma nota de 1 a 10 para avaliar o filme ou pressione enter para sair:");

  if (nota === "") {
    break;
  }

  nota = parseFloat(nota);

  if (isNaN(nota) || nota < 1 || nota > 10) {
    alert("Por favor, digite uma nota válida!");
    continue;
  }

  avaliacoes.push(nota);
}

var menorAvaliacao = Math.min(...avaliacoes);
var maiorAvaliacao = Math.max(...avaliacoes);
var mediaAvaliacoes = avaliacoes.reduce((a, b) => a + b, 0) / avaliacoes.length;

console.log(`Menor avaliação: ${menorAvaliacao}`);
console.log(`Maior avaliação: ${maiorAvaliacao}`);
console.log(`Média das avaliações: ${mediaAvaliacoes.toFixed(1)}`);
