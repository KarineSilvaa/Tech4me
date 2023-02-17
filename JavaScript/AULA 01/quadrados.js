function criarQuadrado() {
const quadrado = document.createElement("div");
quadrado.className = "quadrado";

const lista = document.getElementsByClassName ("container");
lista[0].appendChild(quadrado);
}

function criaDez(){
for(var i = 0; i < 10; i++) criarQuadrado();
}

const botao = document.createElement("button");
botao.onclick = criarQuadrado;
botao.className = "botao";
botao.textContent = "Criar quadrado";

document.body.appendChild(botao);