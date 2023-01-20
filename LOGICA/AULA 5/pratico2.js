/* 

*/

const prompt = require("prompt-sync")();

const nome = prompt("Candidato, digite o seu nome: ");

const p = nome.substring(0, 1);

var dia = "";

const vogal = p == 'a' || p || "e" || p == "i" || p == "o" || p == "u"

if (vogal) dia = "Segunda-feira"; 
else dia = "Terça-feira";

console.log("Sua entrevista será na " + dia);
