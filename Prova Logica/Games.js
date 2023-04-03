const prompt = require("prompt-sync")();

const jogos = {
  "fifa 22": 10.0,
  "call of duty: modern warfare": -5.0,
  "gta v": 15.0,
  "red dead redemption 2": 0.0,
  "mario kart 8 deluxe": 8.0
};

while (true) {
  const nomeJogo = prompt("Digite o nome do jogo que você deseja alugar:");

  if (nomeJogo === "") {
    break;
  }

  const jogo = jogos[nomeJogo.toLowerCase()];

  if (jogo === undefined) {
    console.log("Este jogo não está disponível para locação.");
  } else if (jogo < 0) {
    console.log("Este jogo já está locado e ainda não foi devolvido.");
  } else {
    console.log(`O valor de locação por dia para ${nomeJogo} é R$ ${jogo.toFixed(2)}.`);
  }
}
