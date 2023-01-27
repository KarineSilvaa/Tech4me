/*
Aguardando a resposta certa

O locutor da Rádio Tech4FM irá telefonar ao vivo para um dos ouvintes. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, mas sim “Tech4FM é show”!
*/

const prompt = require("prompt-sync")();

console.log("-- Rádio Tech4FM --");
const logo = "Tech4FM e show";

var acertou = true;
 
 while (acertou) {
 var sorteado = Math.random();
 sorteado = Math.floor(sorteado * 14) + 1;
 console.log("número sorteado:", sorteado);

 var resposta = prompt("Não diga alô, diga " + logo + "! ");

 if (resposta == logo) console.log("Parabéns, ganhou a camiseta!!");
 else console.log("Que pena, frase errada...");

 acertou = false;
}

console.log("fim do concurso");