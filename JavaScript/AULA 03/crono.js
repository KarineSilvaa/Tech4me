const div = document.getElementById("relogio");

var ini;
var id;

function iniciar() {
    ini = new Date();
    id = setInterval(aumento, 1000);
}

function aumento(){
   const diff = new Date() - ini;    
   const hora = new Date(diff);
   hora.setHours(hora.getHours() + 3); 
   div.innerText = hora.toLocareTimeString();
}

const btnIniciar = document.getElementById("iniciar");
btnIniciar.addEventListener('click',iniciar);

const parar = () => {
    clearInterval(id);
}
const btnParar = document.getElementById("parar");
btnParar.addEventListener('click', parar);

const resetar = () =>  {
    clearInterval(id);
    div.innerText = "00:00:00";
};
const btnResetar = document.getElementById("resetar");
btnResetar.addEventListener('click', resetar);

const escrever = (info) => console.log(info);

btnIniciar.addEventListener('click',escrever);
btnParar.addEventListener('click', escrever);
btnResetar.addEventListener('click', escrever);