// Define a classe Paciente
class Paciente {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // Calcula o IMC do paciente
  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  // Retorna a categoria do IMC do paciente
  categoriaIMC() {
    const imc = this.calcularIMC();
    if (imc < 18.5) {
      return "baixo peso";
    } else if (imc < 25) {
      return "normal";
    } else if (imc < 30) {
      return "sobrepeso";
    } else {
      return "obesidade";
    }
  }
}

// Cria os objetos Paciente
const pacientes = [
  new Paciente("Luke Skywalker", 80, 1.8),
  new Paciente("Darth Vader", 150, 1.85),
  new Paciente("Leia Organa", 50, 1.6),
  // adicione mais pacientes aqui
];

// Mostra a categoria do IMC de cada paciente
for (const paciente of pacientes) {
  console.log(`${paciente.nome} = ${paciente.categoriaIMC()}`);
}
