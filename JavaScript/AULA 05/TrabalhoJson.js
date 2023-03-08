const carro ={
    montadora: "Ford",
    modelo: "Corolla"
};

let texto = JSON.stringify(carro);

console.log(texto);

let fusca = JSON.parse(texto);

console.log(fusca.modelo);
