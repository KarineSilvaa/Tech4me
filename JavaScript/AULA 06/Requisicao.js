const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

fetch(url).then(resposta).then(totalEstados);

function resposta(response) {
    return response.json();
}

function totalEstados(lista) {
    console.log(lista.length);
}