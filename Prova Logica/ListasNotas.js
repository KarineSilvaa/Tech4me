var notas = [8.5, 7.0, 6.5, 9.0, 7.5, 5.0, 6.0, 7.0, 8.0, 7.5];

function exibirRltoNotas() {
  console.log("Relatório de Notas:");
  for (let i = 0; i < notas.length; i++) {
    console.log("Aluno " + (i+1) + ": " + notas[i]);
  }
}

function encontrarAlunoMaiorNota() {
  var maiorNota = 0;
  var indiceMaiorNota = 0;
  for (var i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNota) {
      maiorNota = notas[i];
      indiceMaiorNota = i;
    }
  }
  console.log("Aluno com nota acima da média: " + (indiceMaiorNota+1));
}

function encontrarQtdaAlunosAbaixoMedia() {
  var abaixoMedia = 0;
  for (var i = 0; i < notas.length; i++) {
    if (notas[i] < 7.0) {
      abaixoMedia++;
    }
  }
  console.log("Quantidade de alunos abaixo da média: " + abaixoMedia);
}

exibirRltoNotas();
encontrarAlunoMaiorNota();
encontrarQtdaAlunosAbaixoMedia();