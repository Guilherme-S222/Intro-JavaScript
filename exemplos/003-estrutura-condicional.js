let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade ');

if (idade == 18){
    console.log('Você pode se matricular na auto-escola');
}
if (idade > 18){
    console.log('Você tem idade para dirigir caso tenha a habilitação');
}
if (idade < 18){
    console.log('Você não tem idade para dirigir');
}
console.log('A idade digitada é: ' + idade);

// console.log ('A idade digitada é: ' + idade);
// nesse código a seguir você deve pensar na probabilidade de pessoas maiores de 18 e menores de 18, qual é maior? Então sabendo disso primeiro pergunte a maior probabilidade para deixar o código mais eficiênte;

if (idade > 18){
    console.log('Você tem idade para dirigir caso tenha a habilitação');
}
else if (idade < 18){
    console.log('Você não tem idade para dirigir caso tenha a habilitação');
}
else {
    console.log('Você pode se matricular na auto-escola');
}
if (idade >= 18) {
    console.log('Maior');
} 
else{
    console.log('Menor');
}