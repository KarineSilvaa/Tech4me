import formatar from "./funcoes";

const apagar = document.getElementById("resposta");

const url = "https://3979-2804-56c-d7b6-9300-b5c6-5dd4-c7f5-b12f.ngrok.io/carros";

const config = {
  method: "POST",
  headers: {
      "Content-Type": "Application/json",
  }, 
  body: "JSON virá aqui1",
};

function consultar() {
    fetch(url)
    .then(res => res.json())
    .then(listar);
}

consultar();

function listar(lista) {
    lista.forEach(item => {
     li = document.createElement("li");
     li.id = "item_" + item.id;
     li.innerText = item.modelo + " <button onclick='apagar(" + item.id + ")'>Apagar</a> ";
     consultar.appendChild(li);   
    }); 
}

function apagar(id) {
    const urld = url + '/' + id;
    fetch(urld, config).then(function resposta() {
        const apagado = document.getElementById("item_" + id);
        container.removeChild(apagado);
});
}