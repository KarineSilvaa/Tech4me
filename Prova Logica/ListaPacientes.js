class Paciente {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    var imc = this.peso / (this.altura ** 2);
    return imc.toFixed(2);
  }

  verificarCategoria() {
    var imc = this.calcularIMC();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }
}

var pacientes = [
  new Paciente("Darth Vader", 45, 92, 1.87),
  new Paciente("Mestre Yoda", 900, 70, 0.66),
  new Paciente("Luke Skywalker", 25, 75, 1.8),
  new Paciente("Princesa Leia", 28, 60, 1.6),
  new Paciente("Han Solo", 35, 95, 1.85),
];

// Relatório por categoria
var categorias = {
  "Abaixo do peso": [],
  "Peso normal": [],
  Sobrepeso: [],
  Obesidade: [],
};

for (var paciente of pacientes) {
  var categoria = paciente.verificarCategoria();
  categorias[categoria].push(paciente);
}

console.log("Relatório por categoria:");
for (var categoria in categorias) {
  console.log(`${categoria}:`);
  for (var paciente of categorias[categoria]) {
    console.log(` - ${paciente.nome} (${paciente.idade} anos) - IMC: ${paciente.calcularIMC()}`);
  }
}

// Total de pacientes por categoria
console.log("\nTotal de pacientes por categoria:");
for (var categoria in categorias) {
  console.log(`${categoria}: ${categorias[categoria].length}`);
}

// Quantidade de pacientes com sobrepeso ou obesidade
var pacientesSobrepesoObesidade = categorias.Sobrepeso.concat(categorias.Obesidade);
console.log(`\nTotal de pacientes com sobrepeso ou obesidade: ${pacientesSobrepesoObesidade.length}`);
console.log("Sobrepeso:");
for (var paciente of categorias.Sobrepeso) {
  console.log(` - ${paciente.nome}`);
}
console.log("Obesidade:");
for (var paciente of categorias.Obesidade) {
  console.log(` - ${paciente.nome}`);
}
