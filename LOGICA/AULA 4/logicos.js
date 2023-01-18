//AND


//Programador
var gosta_cafe = true;
var trabalha_madrugada = true;

var resposta;
resposta = gosta_cafe && trabalha_madrugada;

console.log("A Karine é programador?", resposta);

//Transito
var sinal_verde = true;
var transito_livre = true;

const pode_acelerar = sinal_verde && transito_livre;
console.log("pode acelerar?", pode_acelerar); 

//Alistamento
var idade_18 = true;
var homem = true;

const alistamento_militar = homem && idade_18;
console.log("Você irá se alistar?", alistamento_militar);


//OR

var sabado = false;
var domingo = true;
const folga = sabado || domingo;
console.log("Esta de folga hoje?",folga);

//Agasalho 
var frio = false;
var vento = true;

const colocar_agasalho = frio || vento;
console.log("colocar agasalho?", colocar_agasalho);

//levar guarda-chuva
var chovendo = false;
var previsao_chuva = false;

const levar_sombrinha = chovendo || previsao_chuva;
console.log("Levar sombrinha?",levar_sombrinha);


//NOT

//Saber dia útil
var fim_semana = false;
const dia_util = !fim_semana;
console.log("é dia útil?", dia_util);

//Comprar alguma coisa?
var condensado = true;
var chantilly = false;
var granulado = true;
const tenho_ingredientes = condensado && chantilly && granulado;
const precisa_comprar = !tenho_ingredientes

console.log("Preciso comprar alguma coisa para o sorvete?", precisa_comprar);