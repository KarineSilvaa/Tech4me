class Carro {
    get modelo() {
         return "Este carro é " + this._modelo;
    }

    set modelo(param){
        this._modelo = param
    }
}

const fusca = new Carro();
fusca.modelo = "Fusca";

console.log(fusca.modelo);

//
class Suv extends Carro {
    get esportivo () {
        return this._esportivo;
    }

    set esportivo (valor) {
        this._esportivo = valor;
    }
}

let nivus = new Suv();

nivus.modelo; // V

let brasilia = new Carro();

brasilia.esportivo; // X

class Sedan extends Carro {
    constructor (gas) {
        super();
    }
}