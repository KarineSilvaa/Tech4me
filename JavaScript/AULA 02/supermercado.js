//Funções
const promocaoPar = function (valor) {
    return (valor * 30) / 100;
};

const promocaoImpar = function (valor) {
    return (valor * 35) / 100;
};

//Promoção
const hoje  = new Date();

const min = hoje.getMinutes();

var fn;

if (min % 2 == 0) fn = promocaoPar;
else fn = promocaoImpar; 

//Chamada
var valor = 15.0;
var desconto = fn(valor);
var total = valor - desconto

console.log ("O desconto é", desconto);
console.log("total a pagar", total);
