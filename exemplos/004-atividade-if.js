// crie um programa que receba duas notas de 0 a 10, calcule a média e com a média exiba as seguintes mensagens para cada faixa de valores.
// nota < 5 = I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B e nota >= 8.5 MB;

let entrada = require('prompt-sync')();

let nota1 = parseFloat(entrada('Digite a 1ª nota '));
let nota2 = parseFloat(entrada('Digite a 2ª nota '));

let somaNota = nota1 + nota2;
let media = somaNota/2;

console.log(media);