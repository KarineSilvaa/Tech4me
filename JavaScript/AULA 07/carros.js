const url = "https://8711-138-185-96-36.ngrok.io/carros";

function obterCarros() {
    fetch(url)
    .then((res) => res.json())
    .then(respostaCb);
}

const container = document.getElementById("container");
const lista = document.createElement("ul");
container.appendChild(lista);

function respostaCb(listaCarros) {
   listaCarros.forEach(preencher);
}

function preencher (carro){
    const item = document.createElement("li");
    lista.appendChild(item);
    item.innerText = "id: " + carro.id + " Carro: " + carro.montadora + " " + carro.modelo + " | Dono: " + carro.aluno;
}