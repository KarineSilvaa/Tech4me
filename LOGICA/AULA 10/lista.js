const lista = [ "Karine", "Laisa", "Maria", "Maxwell", "Moacir" , "Rafael", "Rebeca"];

const nome = "Moacir";

const posicao = lista.indexOf(nome);
//console.log(nome, "encontrado na pos", posicao);

const encontrados = [];

for (var i = 0; i < lista.length; i++){
    const item = lista[i];
   
    //Segundo caso, múltiplas ocorrências
    if (item.substring(0,1) == "R") encontrados.push(item);
    
    /* Primeiro caaso, a condição é chave 
    if(item == nome) {
        console.log(nome, "encontrado na pos", posicao);
        break;
    }
    */
}

console.log(encontrados, encontrados.length);