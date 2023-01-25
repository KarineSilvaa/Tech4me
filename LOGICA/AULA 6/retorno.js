//const prompt = require("prompt-sync")();

function multiplicar(fator, fator2) {
    return fator * fator2;
}

console.log("antes de multiplicar");
var resposta = multiplicar(2,2);

console.log(resposta);

function somarOuSubtrair(parcela, parcela2, queroSomar) {
  if (queroSomar) return parcela + parcela2;

  return parcela - parcela2;
}

var resposta = somarOuSubtrair(2, 2, true);
console.log( "queroSomar = verdade", resposta);

resposta = somarOuSubtrair(2, 2, false);
console.log( "queroSomar = falso", resposta);