let entrada = require('prompt-sync')();

console.log('Exemplo de estrutura de repetição');
let valor = '';
valor = entrada('Digite o valor inicial do contador: ');
let n1 = parseInt(valor);
valor = entrada('Digite o valor final do contador: ');
let n2 = parseInt(valor);

let contador = n1;

console.log('while');
while (contador <= n2) {
    console.log(contador);
    contador++;
}

console.log('for');
for (contador = n1; contador <= n2; contador++) {
    console.log(contador);
}

console.log('Os valor de entrada foram: ');
console.log('Valor inicial: ' + n1 + '\n' + 'Valor final: ' + n2);

entrada();