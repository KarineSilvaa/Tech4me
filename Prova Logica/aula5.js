function compra ( codigo ,valor, qtd ) {
     const total = valor * qtd
     console.log(`Você adquiriu ${qtd} da empresa ${codigo} por ${valor}, total ${total} na sua carteira `);  
     return qtd
}
var carteira = 0;

carteira += compra ("PETR4", 26.6, 100);
carteira += compra ("ITSA4", 8.56, 10);
carteira += compra ("MGLU3", 4.39, 500);

console.log(`Você possui ${carteira} no total na sua carteira`);