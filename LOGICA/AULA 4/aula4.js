var capital = {
    'SP': 'São Paulo',
    'MG': 'Minas Gerais',
    'RJ': 'Rio de Janeiro',
    'ES': 'Espirito Santo'
};

function ufcapital(uf) {
    const nomeint = capital[uf];
    if (nomeint) {
        return nomeint;
    }
    return "UF não encontrada";
}
console.log(ufcapital ('SP'));
console.log(ufcapital ('MG'));
console.log(ufcapital ('RJ'));
console.log(ufcapital ('ES'));