const lista = ["João Victor", "Karine", "Laisa", "Maria", "Maxwell", "Moacir" , "Rafael", "Rebeca", "Thays"];

const texto = lista.join("|");

console.log(texto);

//Fazendo o nosso próprio join
var acumuladora = "";
 
for(var i = 0; i < lista.length; i++){
     const item = lista[i];
     acumuladora += "|" + item;
}

acumuladora = acumuladora.substring(1);
console.log(acumuladora);

/*
 if (i == lista.length - 1) acumuladora += item
     else acumuladora += item + "|";
 */