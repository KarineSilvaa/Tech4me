const readline = require('readline');

var clientes = {
  'Luffy': 200.00,
  'Neymar': 0.00,
  'Annie': 78.00,
  'Ellie': 100.00,
  'Barry Allen': -498.987
};

function consultarSaldo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Colocar o nome do cliente: ', (nome) => {
    var saldo = clientes[nome.toLowerCase()];
    if (saldo === undefined) {
      console.log('Cliente não se encontra no sistema do Banco.');
    } else {
      console.log(`O saldo ${nome} é R$ ${saldo.toFixed(2)}.`);
    }

    rl.close();
  });
}

consultarSaldo();