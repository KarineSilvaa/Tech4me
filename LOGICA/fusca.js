const fusca = { motor: 1.6, cor: "verde"};
const carro = fusca;
carro.cor = "azul";
console.log(fusca.cor);