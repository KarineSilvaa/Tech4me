const prompt = require("prompt-sync")();

var amigos = 0;
var total = 0;

function numero(i) {
    switch (i) {
        case 1: 
          return "UM"
        case 2: 
          return "DOIS"
        case 3:  
          return "TRÊS"
        case 4: 
          return "QUATRO"
    }
}

while(amigos < 4) {
    //entrei e incrementei
    amigos++;

    console.log("Amigo", numero(amigos), "quanto?");
    var texto = prompt("");
    var aposta = parseFloat(texto);
    total += aposta;
    
    //Encremento ao final
    //amigos += 1;
    //amigos = amigos + 1;
}

console.log("O vencedor vai fatura R$", total);