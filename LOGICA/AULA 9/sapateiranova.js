const prompt = require("prompt-sync")();

const sapatos = ["", "Tênis Nike", "Tênis AllStar","Bota cano alto", "Crocs papete", "Sandália Melissa"];
console.log("==App Sapateira longa==");
var espaco = prompt("Digite o número do espaço: ");
var indice = parseInt(espaco);
var qual = prompt("Nome do sapato: ");
sapatos [indice] = parseInt(espaco);

var resposta = qual;
console.log("Nesta espaço está o ", resposta)