// Professor não consegui fazer esse codigo funcionar

pacientes = [
    {'nome': 'Luke Skywalker', 'peso': 68, 'altura': 1.72},
    {'nome': 'Darth Vader', 'peso': 136, 'altura': 2.02},
    {'nome': 'Leia Organa', 'peso': 55, 'altura': 1.55},
    {'nome': 'Han Solo', 'peso': 85, 'altura': 1.8},
    {'nome': 'Mestre Yoda', 'peso': 30, 'altura': 0.66},
    {'nome': 'Chewbacca', 'peso': 200, 'altura': 2.28},
    {'nome': 'C-3PO', 'peso': 75, 'altura': 1.67},
    {'nome': 'R2-D2', 'peso': 32, 'altura': 0.96}
]

categorias = {
    'baixo peso': {'min': 0, 'max': 18.4},
    'normal': {'min': 18.5, 'max': 24.9},
    'sobrepeso': {'min': 25, 'max': 29.9},
    'obesidade': {'min': 30, 'max': float('inf')}
}

for (paciente in pacientes)
    imc = paciente['peso'] / (paciente['altura'] ** 2)
    paciente['imc'] = imc
    for (categoria, limites in categorias.items())
    if (limites['min'] <= imc <= limites['max']);
    paciente['categoria'] = categoria
    break;


for (categoria in categorias)
    pacientes_categoria = [ for  in pacientes ]
      if ( 'categoria' == categoria)
    if (categoria == 'sobrepeso')
        print('Sobrepeso:')
        for (paciente in pacientes_categoria)
            print('- ' + paciente['nome'] + ', IMC: ' + str(paciente['imc']))
    else categoria == 'obesidade';
        print('Obesidade:')
        for (paciente in pacientes_categoria)
            print('- ' + paciente['nome'] + ', IMC: ' + str(paciente['imc']))
    else
        print(categoria.capitalize() + ':')
        for (paciente in pacientes_categoria)
            print('- ' + paciente['nome'] + ', IMC: ' + str(paciente['imc']))
    
total_por_categoria = {}
for (categoria in categorias)
    pacientes_categoria = [p for p in pacientes if p['categoria'] == categoria]
    total_por_categoria[categoria] = len(pacientes_categoria)
print('\nTotal de pacientes por categoria:')
for (categoria, total in total_por_categoria.items())
    print('- ' + categoria.capitalize() + ': ' + str(total))
    

total_sobrepeso_obesidade = 0
for (paciente in pacientes)
    if (paciente['categoria'] == 'sobrepeso') or paciente['categoria'] == 'obesidade'
        total_sobrepeso_obesidade += 1
print('\nTotal de pacientes com sobrepeso ou obesidade: ' + str(total_sobrepeso_obesidade))


