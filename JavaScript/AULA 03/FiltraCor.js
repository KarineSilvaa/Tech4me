const lista = [

    {
        aluno: "Karine",
        montadora: "BMW",
        modelo: "X1",
        cor: "azul"
    },
    {
    aluno: "christian",
    montadora: "Tesla",
    modelo: "model S",
    cor: "prata"
    },
    {
    aluno : "Luiz Felipe",
    montadora: "Volkswagem",
    modelo : "Jetta",
    cor: "preto" 
    },
    {
    aluno: "Carlos",
    montadora: "Nissan",
    modelo: "Nissan Kicks",
    cor: "platinado"
    },
    {
    aluno: "Maxwell",
    montadora: "tesla",
    modelo: "Model S",
    cor: "branco"
    },
    {
    aluno:"Alex",
    montadora:"Mitsubishi",
    modelo: "Lancer Evolution",
    cor: "vermelho"
    },
    {
    aluno : "João Victor",
    montadora : "Volkswagen",
    modelo : "Santana",
    cor : "vermelho"
    },
    {
    aluno: "Thays",
    montadora: "toyota",
    Modelo: "Corola",
    cor: "Vermelho"
    },
    {
    aluno: "Gabriel",
    montadora: "Porsche",
    modelo:"Panamera",
    cor:"Cinza"
    },
    {
    aluno: "Gian",
    montadora: "Renault",
    modelo: "Joy",
    cor: "Prata"
    },
    {
    aluno: "Vinicius",
    montadora: "toyota",
    modelo: "Supra",
    cor: "laranja"
    },
    {
    aluno: "Aline",
    montadora: "Focus",
    modelo: "Ford",
    cor: "Prata"
    },
    {
    aluno: "Rebeca",
    montadora: "Chevrolet",
    modelo: "Vectra",
    cor: "Preto"
    },
    {
    aluno: "Bryan",
    montadora: "Nissan",
    modelo: "Nissan Versa",
    cor: "Vermelho metalico"
    },
    
    ];

const vermelhosFn = (carro) => carro.cor.toLowerCase() === "vermelho";

const resultado = lista.filter(vermelhosFn);

console.log(resultado);

const primeiro = lista.find(vermelhosFn);

console.log("único", primeiro);