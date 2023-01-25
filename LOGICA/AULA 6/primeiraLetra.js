console.log("== Setor de RH ==");

function primeiraLetra(nome) {
    console.log("o conteúdo da var nome é", nome);
    var letra = nome.substring(0, 1);
    letra = letra.toLowerCase();
    console.log("A primeira letra é",letra);
}

primeiraLetra("Marcelo");
primeiraLetra("Karine");
primeiraLetra("Carlos");
