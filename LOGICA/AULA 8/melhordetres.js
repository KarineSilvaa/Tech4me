/*
Melhor de três
O locutor da rádio Tech4FM irá fazer uma pergunta ao vivo. Três ouvintes terão a chance de ganhar uma caneca personalizada ao acertar a resposta. Cada ouvinte terá duas chances de responder.
*/

const prompt = require("prompt-sync")();
const certa = "encadeamento";

for (var i = 0; i < 3; i++){
    console.log("Ouvinte ", i + 1);
    var vidas =2;
    var resposta = "";

    do{
         resposta = prompt("Que nome se dá a um if dentro do outro?")

        if (resposta ==  certa){
            console.log("Parabéns, ganhou a caneca");}
        else{
            vidas--;
        }
    }  while(resposta !== certa && vidas > 0);
    
    if (resposta !== certa)console.log("despediçou sua chance");   
}

console.log("Obrigado a todos que participaram");
