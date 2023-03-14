let notas = [10, 5, 4.35];
let produtos = ['Borracha', 'Caderno', 'Canata'];

console.log(notas);
console.log(produtos);
console.log('1º produto da lista: ' + produtos[0]);

notas[2] = 4.5;
console.log('Nota corrigida:' + notas[2]);

for (let cont = 0; cont < produtos.length; cont++){
    console.log(cont + 1 + 'º produto da lista: ' + produtos[cont]);
}
for (const cont in notas){
    console.log(parseInt(cont) + 1 + 'ª nota: ' + notas[cont]);
}
let listaProdutos = [
    {
        id: 1,
        nome: 'Borracha',
        preco: '1.00'
    },
    {
        id: 2,
        nome: 'Caderno',
        preco: '4.50'
    },
    {
        id: 3,
        nome: 'Caneta',
        preco: '4.50'
    }
];
console.log('ID: ' + listaProdutos[2].id + '\n' + 'Nome: ' + listaProdutos[2].nome + '\n' + 'Preço: R$ ' + listaProdutos[2].preco);
