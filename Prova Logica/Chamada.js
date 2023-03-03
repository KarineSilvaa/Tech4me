const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alunos = [];

function nomes() {
  rl.question('Colocar o nome do aula, caso querer encerrar pressionar a tecla Enter ', (nome) => {
    if (nome) {
      alunos.push(nome);
      nomes();
    } else {
      console.log('Alunos presente na aula: ');
      console.log(alunos);
      rl.close();
    }
  });
}
nomes();
