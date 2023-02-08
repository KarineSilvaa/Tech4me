//Aula de como copiai arrays
const frutas = ["🍑", "🍓", "🍍", "🍉", "🍇"];

//1.
const copia = [];
for(var i = 0; i < frutas.length; i++) {
    const item = frutas[i]; 
    copia.push(item)
}
console.log("percorrendo", copia);

//2.
const fatiar = frutas.slice();
console.log("slice", fatiar);

//3.
const concatenar = frutas.concat();
console.log("concat", concatenar);

//"A solução que veio á sua cabeça é a forma certa!", Zepa, 2023;