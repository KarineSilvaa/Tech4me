const readline = require("readline");

const precoAcompanha = 2.0;

var acompanha = [];

function solicitarNomeSanduiche() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question("Sanduíche: ", nome => {
      rl.close();
      resolve(nome);
    });
  });
}

async function solicitarAcompanha() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  for (var i = 0; i < 5; i++) {
    var acompanha = await new Promise(resolve => {
      rl.question(`Colocar o ${i+1}º acompanha ou concluir o pedido: `, acomp => {
        resolve(acomp);
      });
    });
    if (acompanha.toLowerCase() == "concluir") {
      break;
    } else {
      acompanha.push(acompanha);
    }
  }
  rl.close();
}

function calcularVlrPedido() {
  var valorSanduiche = 15.5;
  var valorAcompanha = acompanha.length * precoAcompanha;
  var valorTotal = valorSanduiche + valorAcompanha;
  return valorTotal;
}

async function exibirPedidoCompleto() {
  var nomeSanduiche = await solicitarNomeSanduiche();
  await solicitarAcompanha();
  var valorPedido = calcularVlrPedido();
  console.log("Pedido: " + nomeSanduiche);
  console.log("Acompanha:");
  for (var i = 0; i < acompanha.length; i++) {
    console.log("- " + acompanha[i]);
  }
  console.log("Pagar: R$ " + valorPedido.toFixed(2));
}

exibirPedidoCompleto();