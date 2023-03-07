/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/
let entrada = require('prompt-sync')();

console.log('Atividade estrutura de repetição');
let valor = '';
valor1 = entrada('Digite o valor inicial ');
let n1 = parseInt(valor);
valor2 = entrada('Digite o valor final ');
let n2 = parseInt(valor);

let contador = n1;

console.log('for');

if (valor1 < valor2){



for (contador = n1; contador <= n2; contador++) {
    console.log(contador);
}
}

console.log('Os valor de entrada foram: ');
console.log('Valor inicial: ' + contador + '\n' + 'Valor final: ' + n2);

entrada();


