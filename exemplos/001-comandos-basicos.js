console.log('Hello World!');

// comentário de uma linha
/* comentario mais de uma linha*/ 

/*
    Pesquisar a diferença entre as instruções
    var, let e const na linguaguem java-script
*/
let nome = "Guilherme" ;
let idade = 24 ;
let altura = 1.75 ;
let trabalha = true ;
let estuda = true ;
let cor_favorita = "verde" ;
let cores_favoritas = ["verde", "azul", "preto"] ;
/* [] array */
let endereco = {
    "logradouro"    : "rua",
    "nome_log"      : "Brasil",
    "n"             : "105-a",
    "bairro"        : "centro"
};
let covid;
let dengue = null;
const exfunc = () => {};

console.log("variável nome = "  + typeof(nome));
console.log("variável idade = "  + typeof(idade));
console.log("variável altura = "  + typeof(altura));
console.log("variável trabalha = "  + typeof(trabalha));
console.log("variável estuda = "  + typeof(estuda));
console.log("variável cor_favorita = "  + typeof(cor_favorita));
console.log("variável cores_favoritas = "  + typeof(cores_favoritas));
console.log("variável endereco = "  + typeof(endereco));
console.log("variável covid = "  + typeof(covid));
console.log("variável dengue = "  + typeof(dengue));
console.log("variável exfunc =" + typeof (exfunc));
