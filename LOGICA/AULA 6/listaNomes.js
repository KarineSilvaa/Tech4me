console.log("== Setor de RH ==");

console.log("Lista de nome e sobrenomes", "\n");

nomeSobrenome("João", "Silva", true);
nomeSobrenome("José", "Amaranto", false);
nomeSobrenome("Gonçalves", "Miguel", false);

function nomeSobrenome(nome, sobrenome, jaFoiEntrevistado) {
    console.log("Candidato -> Nome: ", nome);
    console.log("Sobrenome: ", sobrenome, "\n");

    if(jaFoiEntrevistado) console.log("Já foi entrevistado antes");
    else console.log("Ainda aguarda a entrevista");
}
