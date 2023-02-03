const prompt = require("prompt-sync")();

const produtos = ["Morango", 6 ,"Creme", 8, "Chcoclate", 3];

produtos.push("Chocomente", 4);

var escolha = prompt("Digite númmero do sorvete: ");

var indice = parseInt(escolha);

console.log("Sabor", produtos[indice], "Qtde estoque", produtos[indice + 1]);
