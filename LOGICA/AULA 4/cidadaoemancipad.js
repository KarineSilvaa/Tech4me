var idade = 21;
var sex = 'f'
const idade_m = 18
const idade_f = 21

var sou_emancipado_m = idade >= idade_m && sex == 'm'
var sou_emancipado_f = idade >= idade_f && sex == 'f'

var sou_emancipado = sou_emancipado_f 

//sou emancipado se for maior de 18 e do sexo masculino
//sou emancipado se for amior de 21 e do sexo feminino


console.log("Sou emancipado?", sou_emancipado);

/*
------------------
//'Você já é emancipado'
//'Você ainda não é emancipado'

if (sou_emancipado) console.log("Você já é emancipado, por que ja tem " + idade + " anos.");

if (!sou_emancipado) console.log("Você ainda não é emancipado, por que ja tem " + idade + " anos.");
*/

var mensagem = "Você já é emancipado, por que ja tem " + idade + " anos.";

if (sou_emancipado) mensagem = "Você ainda não é emancipado, por que ja tem " + idade + " anos.";

console.log(mensagem);