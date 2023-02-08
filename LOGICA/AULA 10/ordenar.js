const frutas = ["🍑", "🍓", "🍍", "🍉", "🍇"];

console.log(frutas);

/* const nova = frutas.sort();
console.log("ordenada", frutas);
console.log("nova",nova);
*/

const novo = frutas.slice();

//mexeu no array original
novo.sort();

console.log("frutas", frutas);
console.log("novo", novo);