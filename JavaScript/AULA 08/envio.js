const resposta = document.getElementById("resposta");

const url = "https://8ca3-2804-56c-d7b6-9300-58e5-bc74-6d98-7b50.ngrok.io/carros";
const config = {
  method: "POST",
  headers: {
      "Content-Type": "Application/json",
  }, 
  body: "JSON virá aqui1",
};

resposta.innerText = "Pressione cadastrar";

const campoMontadora = document.getElementById("montadora");
const campoModelo = document.getElementById("modelo");

function cadastrar() {
    const montadora = campoMontadora.value;
    const modelo = campoModelo.value;

    const novo = {
        aluno :"Karine",
        montadora, 
        modelo,
    };

    config.body = JSON.stringify(novo);
    fetch(url, config).then(resCb).then(escrever);   
}

function resCb(res){
    return res.json()
}

function escrever(dados) {
    resposta.innerText = "O novo carro tem id" + dados.id;
    recuperar(dados.id);
}

function recuperar(id) {
    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(carroCb);
}

const ul = document.createElement("ul");
document.body.appendChild(ul);

function carroCb(carro) {
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerText = JSON.stringify(carro);
}