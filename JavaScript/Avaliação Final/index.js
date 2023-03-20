// const time = document.getElementById("crono");
// time.innerHTML = `As ofertas exclusivas terminam em: ${horas}:${minutos}:${segundos}`;
// document.body.appendChild(time);

// Cronômetro
function cronometro()
{
	let now = new Date();
	let horas = 23 - now.getHours();
	let minutos = 59 - now.getMinutes();
	let segundos = 59 - now.getSeconds();
	if(minutos < 10) minutos = "0" + minutos;
	if(segundos < 10) segundos = "0" + segundos;
	document.getElementById('crono').innerHTML = horas + ":" + minutos + ":" + segundos;
}
cronometro();
setInterval(cronometro, 1000);
