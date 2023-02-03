const prompt = require("prompt-sync")();

var sapato1;
var sapato2;
var sapato3;
var sapato4;
var sapato5;


sapato1 = "Tênis Nike";
sapato2 = "Tênis AllStar";
sapato3 = "Bota cano alto";
sapato4 = "Crocs papete";
sapato5 = "Sandália Melissa";

console.log("==App Sapateira==");
var espaco = prompt("Digite o número do espaço: ");

var resposta;

switch(espaco) {
    case "1" :
      resposta = sapato1; 
         break;
    case "2" : 
       resposta = sapato2;
       break;
    case "3" : 
       resposta = sapato3; 
       break;
    case "4" : 
       resposta = sapato4; 
       break;
    case "5" : 
       resposta = sapato5; 
       break;
}

console.log("Nesta espaço está o ", resposta);