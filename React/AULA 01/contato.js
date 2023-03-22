const contatoContainer = document.getElementById("container");

function contato() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Página de contato!";

    contatoContainer.innerHTML = "";
    contatoContainer.appendChild(h1);
}