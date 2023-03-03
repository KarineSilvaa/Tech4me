
class Carro {
    constructor () {
        this.montadora = "VW";
        this.modelo = "Fusca";
    }
    
    obterNome() {
        return this.montadora + " " + this.modelo;
    }
}

let carro = new Carro();

console.log(carro);