const bolas = ["⚽", "⚾", "🏀"];
console.log("antes", bolas);

function muda(jogo) {
    jogo[1] = "🏈";
    console.log("fn", bolas);
}

muda(bolas);
console.log("externo", bolas);