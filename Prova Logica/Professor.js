const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var alunos = [];

console.log('Colocar o nome dos alunos online na aula. (quando encerrar a chamada pressionar a tecla Enter)');

rl.on('line', (input) => {
  if (input === '') {
    console.log(`Alunos online: ${alunos.join(', ')}`);
    rl.close();
  } else {
    alunos.push(input);
  }
});


//Exemplo com do while abaixo.

/* 
const readlineSync = require('readline-sync');

var alunos = [];

console.log('Colocar o nome dos alunos online na aula. (quando encerrar a chamada pressionar a tecla Enter)');

do {
  const nome = readlineSync.question('Colocar o nome do aluno: ');
  if (nome === '') break;
  alunos.push(nome);
} while (true);

console.log(`Alunos online: ${alunos.join(', ')}`);
*/