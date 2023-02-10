const lista = [];

const outra = [];

lista.push("1");
outra.push("1");

console.log("lista", lista);
console.log("outra", outra);

const terceira = lista;

lista.push("3");
terceira.push("4");

console.log("lista", lista);