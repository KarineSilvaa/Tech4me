const listaDeCarro = [
    
    {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2010,
        valorCompra: 20000,
        valorAtual: 10000,
        cor: "vermelho"
    },
    {
        marca: "Mitisubish",
        modelo: "Lancer Evolution X",
        ano: 2013,
        valorCompra: 48000,
        valorAtual: 43000,
        cor: "preto"
    },
    {
        marca: "BMW",
        modelo: "x6",
        ano: 2014,
        valorCompra: 33000,
        valorAtual: 28000,
        cor: "azul"
    },

]

for(var i = 0; i < listaDeCarro.length;  i++){
  
    const carroAtual = listaDeCarro[i];

    carroAtual.lucroDaLoja = valorCompra => valorCompra * 0.03;
    
    carroAtual.ipva = valorAtual => valorAtual * 0.04;

    carroAtual.licenciamento = ano => {
        
        const anoAtual = new Date().getFullYear();

        const idadeDoCarro = anoAtual - ano;

        if(idadeDoCarro <= 10) {
            return 160.00;
        }
        return 0;
    }

}

for(var i = 0; i < listaDeCarro.length;  i++){

    const carroAtual = listaDeCarro[i];
    console.log(carroAtual.lucroDaLoja(carroAtual.valorCompra));
    console.log(carroAtual.ipva(carroAtual.valorCompra));
    console.log(carroAtual.licenciamento(carroAtual.valorCompra));
}
