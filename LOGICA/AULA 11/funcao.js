var a = 7;

function naoMuda(a) {
  a = a + 5;
  console.log("parâmetro", a);
}

naoMuda(a);
console.log("variável", a);
