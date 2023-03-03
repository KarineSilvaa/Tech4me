const lista = ["😒","😍","💕","😊","❤️"];

const cb = (emoji) => emoji + emoji;

texto = `Tivemos as reações: ${lista.map(cb)}`;
console.log(texto);