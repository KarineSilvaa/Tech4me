
class Carro {
    constructor (montadora, modelo) {
        this.montadora = montadora;
        this.modelo = modelo;
    }
    
    obterNome() {
        return this.montadora + " " + this.modelo;
    }
}

let carro = new Carro("Fiat", "FastBack");
 carro = new Carro("Fiat", "Uno");

console.log(carro);