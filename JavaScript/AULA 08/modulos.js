import { url } from "./carro.js";
import frutas from "./frutas.js";

const container = document.getElementById("container");

container.innerHTML = "<h1>Hello</h1>";

const p = document.createElement("p");
p.innerHTML = url;
container.appendChild(p);

const p1 = document.createElement("p");
p.innerHTML = frutas[1];
container.appendChild(p);
