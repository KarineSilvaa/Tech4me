//fusca
const fusca = {
    montadora: "VW",
    modelo: "Fusca",
};


const carro = fusca;

//declaração
//código da função para uma variável
const  saudacao = function () {
    return "Boa noite sem nome";
};

//duas vars apontam pra mesma função
const outro = saudacao;

const resposta = saudacao();
console.log(resposta);
