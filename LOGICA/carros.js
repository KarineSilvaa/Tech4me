const lista = [];

var carro = {
    aluno: "Karine",
    montadora: "BMW",
    modelo: "X1",
    cor: "azul"
};
lista.push(carro);

carro = {
aluno: "christian",
montadora: "tesla",
modelo: "model S",
cor: "prata"
};
lista.push(carro);

carro = {
aluno : "Luiz Felipe",
montadora: "Volkswagem",
modelo : "Jetta",
cor: "preto" 
};
lista.push(carro);

carro = {
aluno: "Carlos",
montadora: "Nissan",
modelo: "Nissan Kicks",
cor: "platinado"
};
lista.push(carro);

carro = {
aluno: "Maxwell",
montadora: "Tesla",
modelo: "Model S",
cor: "branco"
};
lista.push(carro);
   
carro = {
aluno:"Alex",
montadora:"Mitsubishi",
modelo: "Lancer Evolution",
cor: "vermelho"
};
lista.push(carro);
 
carro = {
aluno : "João Victor",
montadora : "Volkswagen",
modelo : "Santana",
cor : "vermelho"
};
lista.push(carro)

carro =  {
aluno: "Thays",
montadora: "toyota",
Modelo: "Corola",
cor: "Vermelho"
};
lista.push(carro);

carro = {
aluno: "Gabriel",
montadora: "Porsche",
modelo:"Panamera",
cor:"Cinza"
};
lista.push(carro);

carro = {
aluno: "Gian",
montadora: "Renault",
modelo: "Joy",
cor: "Prata"
};
lista.push(carro);

carro = {
aluno: "Vinicius",
montadora: "Toyota",
modelo: "Supra",
cor: "laranja"
};
lista.push(carro);

carro = {
aluno: "Aline",
montadora: "Focus",
modelo: "Ford",
cor: "Prata"
};
lista.push(carro);

carro = {
aluno: "Rebeca",
montadora: "Chevrolet",
modelo: "Vectra",
cor: "Preto"
};
lista.push(carro);

carro = {
aluno: "Bryan",
montadora: "Nissan",
modelo: "Nissan Versa",
cor: "Vermelho metalico"
};
lista.push(carro);

carro = {
aluno: "Rafael",
montadora: "Chevrolet",
modelo: "Camaro",
cor: "Amarelo"
};
lista.push(carro);

console.log(lista.length);

var cont = 0;
    
for(var i = 0; i < lista.length; i++){
        const item = lista[i];

        if (item.cor.toLowerCase == "vermelho") cont++;
    }

console.log("Total de vermelhos", cont);
           
//Totalização por cor

const cores = [];
const total = [];


for(var i = 0; i < lista.length; i++){
    const item = lista[i];
    const cor = item.cor.toLowerCase();
    const pos = cores.indexOf(cor);

    if (pos == -1 ) {
        cores.push(cor);
        total.push(1);
    }else total[pos] = total[pos] + 1;
}

//Exibição do resultado acumulado
for(var i = 0; i < lista.length; i++){
    console.log(cores[i], total[i]);
}

console.log("Cores com mais de uma ocorrência")
for(var i = 0; i < lista.length; i++){
    
}
