var texto = 'Aspas simples, "dulpas no meio do texto';

texto = "Aspas duplas, simple's no meio";

texto = `esse 
         demilitador 
         aqui.`;

texto = `Soma: ${2 + 2}`;
 
console.log(texto);    

const nome = "Maria";

texto = `Eu amo a ${nome} e sinto ${"amor".toUpperCase()}`;
console.log(texto);

const lista = ["😒","😍","💕","😊","❤️"];

const cb = (emoji) => emoji + emoji;

texto = `Tivemos as reações: ${lista.map(cb)}`;
console.log(texto);

const hora = 21;

texto = `Tenha um ${(() => {if (hora > 18) 
    return "noite"; 
return "dia"})()}`;
console.log(texto);