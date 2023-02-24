//IPVA: 4%
const promt = require("prompt-sync")()

var valorCarro = promt("Qual o valor atual do carro: ")

function calcularIPVA (valor_fipe) {
    return valor_fipe * 0.04; 
}

const calcIPVA = valor => valor * 0.04;

var carroComIPVA = calcIPVA(valorCarro)

console.log("seu carro de: " + valorCarro + " ta com IPVA de: " + carroComIPVA);