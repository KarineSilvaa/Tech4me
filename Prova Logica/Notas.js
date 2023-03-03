var alunos = [
    {
      nome: 'Caroline',
      modulo: 'HTML',
      nota_4: 7.5,
      nota_6: 8.0
    },
    {
      nome: 'Camille',
      modulo: 'CSS',
      nota_4: 6.0,
      nota_6: 7.0
    },
    {
      nome: 'Karine',
      modulo: 'JavaScript',
      nota_4: 9.0,
      nota_6: 6.5
    },
    {
      nome: 'Aline',
      modulo: 'Lógica de Programação',
      nota_4: 7.0,
      nota_6: 7.5
    },
    {
      nome: 'Maria',
      modulo: 'React.js',
      nota_4: 8.5,
      nota_6: 9.0
    }
  ];
  function calcularMedia(aluno) {
    var media = (aluno.nota_4 + aluno.nota_6) / 2;
    return media;
  }
  function determinarStac(media) {
    if (media >= 7.0) {
      return 'Aprovado';
    } else {
      return 'Reprovado';
    }
  }
  function exibirStacAlunos() {
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      var media = calcularMedia(aluno);
      var situacao = determinarStac(media);
      console.log(`${aluno.nome} foi ${situacao} no módulo de ${aluno.modulo}.`);
    }
  }
  exibirStacAlunos();