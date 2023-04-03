const prompt = require("prompt-sync")();

var destinos = "";
var contador = 1;

while (true) {
  const destino = prompt(`Digite o destino desejado ${contador} ou pressione enter para sair:`);
  
  if (destino === "") {
    break;
  }

  destinos += `${contador} - ${destino}\n`;
  contador++;
}

console.log("Destinos desejados:\n" + destinos);

/*
var destinos = "";
var contador = 1;

do {
  const destino = prompt(`Digite o destino desejado ${contador} ou pressione enter para sair:`);

  if (destino === "") {
    break;
  }

  destinos += `${contador} - ${destino}\n`;
  contador++;
} while (true);

console.log("Destinos desejados:\n" + destinos);


*/

