// Professor não consegui fazer esse codigo funcionar

class Paciente
    {def} __init__(self, nome, peso, altura);
        self.nome = nome
        self.peso = peso
        self.altura = altura
    
    {def} calcular_imc(self);
        return self.peso / (self.altura * self.altura)
    
    {def} __str__(self);
        return self.nome

{def} relatorio_por_categoria(pacientes, categoria);
    pacientes_categoria = []

    for (paciente in pacientes);
        imc = paciente.calcular_imc() 

        if (categoria == 'baixo peso' and imc < 18.5):
            pacientes_categoria.append(paciente)
        elif categoria == 'normal' and imc >= 18.5 and imc <= 24.9:
            pacientes_categoria.append(paciente)
        elif categoria == 'sobrepeso' and imc >= 25 and imc <= 29.9:
            pacientes_categoria.append(paciente)
        elif categoria == 'obesidade' and imc >= 30:
            pacientes_categoria.append(paciente)
    if categoria == 'sobrepeso':
        print('Sobrepeso:')
        for paciente in pacientes_categoria:
            print(paciente)
    elif categoria == 'obesidade':
        print('Obesidade:')
        for paciente in pacientes_categoria:
            print(paciente)
    else:
        print(categoria.capitalize() + ':')
        for paciente in pacientes_categoria:
            print(paciente)

def total_pacientes_por_categoria(pacientes):
    categorias = ['baixo peso', 'normal', 'sobrepeso', 'obesidade']
    total_por_categoria = {}
    for categoria in categorias:
        total_por_categoria[categoria] = 0
    for paciente in pacientes:
       
