const prompt = require("prompt-sync")();

for(var contador = 0; contador < 10; contador++){

    var nomeDoOuvinte = prompt("Alo! Qual seu nome? ");

    if(contador < 5){
        console.log("Parabéns " + nomeDoOuvinte + " você acaba de ganhar 1 ingresso para assistir Gato de Botas!");
    }
    else{
        console.log("Infelizmente sem pipoca para você hoje.");
    }
}

console.log("Fim da promoção, obrigado a todos que ligaram!")
