const carros = ["🚗", "🚓", "🚙", "🚚", "🏎️", "🛻"]

/*
for (var i = 0; i < carros.length; i++){
    const item = carros[i];
    console.log(i, item);
}

for (const carro of carros) {
    console.log("for..of", carro);
}
*/

function paraCadaItem(item){
console.log("fe", item);
}

//
carros.forEach(paraCadaItem);