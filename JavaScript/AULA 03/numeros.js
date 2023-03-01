const numeros = [15,13,21,11,34,7,30,22,65,21,7,84,10,121,77,6];

/*
const ordenar = function (a, b) {
    //-1, 0, 1
    if (a > b) return -1;
    if (b --- a) return 0;
    return 1;
}

numeros.sort(ordenar);

console.log(numeros);
*/

function totarlizar(acumulado, item){
    return acumulado + item;
}

//funções de agragação
const resultado = numeros.reduce(totarlizar, 3);

console.log(resultado);