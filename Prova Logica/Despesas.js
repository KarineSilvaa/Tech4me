const prompt = require("prompt-sync")();

var despesas = {};
var descricaoDespesa;
var valorDespesa;

while (true) {
  descricaoDespesa = prompt("Digite a descrição da despesa ou digite 'fim' para encerrar:");
  
  if (descricaoDespesa === "fim") {
    break;
  }
  
  valorDespesa = parseFloat(prompt("Digite o valor da despesa:"));

  if (isNaN(valorDespesa)) {
    alert("Por favor, digite um valor válido!");
    continue;
  }

  despesas[descricaoDespesa] = valorDespesa;
}

var totalDespesas = 0;

for (var despesa in despesas) {
  console.log(`${despesa} (R$ ${despesas[despesa]})`);
  totalDespesas += despesas[despesa];
}

console.log(`Total de despesas = R$ ${totalDespesas.toFixed(2)}`);
