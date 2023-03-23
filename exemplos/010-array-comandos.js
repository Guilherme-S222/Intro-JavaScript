//Este código parece estar utilizando o módulo prompt-sync para permitir a entrada de dados pelo usuário.
let entrada = require('prompt-sync')(); 
// É definida uma variável tarefas que é um array de objetos. 
//Cada objeto representa uma tarefa e possui três propriedades: id, tarefa e realizada.
let tarefas = [
    {
        id: 1, //A propriedade id é um número inteiro que identifica exclusivamente cada tarefa.
        tarefa: 'Estudar js', //A propriedade tarefa é uma string que contém uma descrição da tarefa.
        realizada: false //A propriedade realizada é um booleano que indica se a tarefa foi realizada ou não.
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
    //Note que a primeira e segunda tarefas não foram realizadas, enquanto a terceira tarefa foi realizada.
];
//Este código parece ser uma estrutura de dados básica que pode ser utilizada em um programa para gerenciar tarefas. Por exemplo, pode ser usado para exibir uma lista de tarefas, permitir ao usuário marcar as tarefas como concluídas ou para adicionar novas tarefas à lista.

let opcao = 0; //Este código define uma variável opcao e atribui o valor 0 a ela.

//O menu apresenta opções para listar as tarefas pendentes ou realizadas, adicionar uma nova tarefa, editar uma tarefa e excluir uma tarefa. Para cada opção do menu, o programa executa uma função que manipula a lista de tarefas de acordo com a opção selecionada.
do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes'); 
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Editar tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

    // LISTAR TAREFAS PENDENTES - A primeira opção do menu (1) lista todas as tarefas pendentes, ou seja, aquelas que não foram concluídas ainda. O programa faz um loop pelo array de tarefas e exibe as informações de cada tarefa pendente.
    if (opcao == 1) {
        console.log('---');
        console.log('Tarefas Pendentes:');
        console.log('---');
        for (const i in tarefas){
            if (tarefas[i].realizada == false){
                console.log('ID: ' + tarefas[i].id);
                console.log('TAREFA: ' + tarefas[i].tarefa);
                console.log('REALIZADA: ' + (tarefas[i].realizada ? 'Sim' : 'Não'));
                console.log('---');
            }
        }
        console.log('Pressione Enter para continuar');
        entrada ();
    }

    // LISTAR TAREFAS REALIZADAS - A segunda opção do menu (2) lista todas as tarefas já realizadas. O programa faz um loop pelo array de tarefas e exibe as informações de cada tarefa realizada.
    if (opcao == 2) {
        console.log('---');
        console.log('Tarefas Realizadas:');
        console.log('---');
        for (const i in tarefas) {
            if (tarefas[i].realizada == true){
                console.log('ID: ' + tarefas[i].id);
                console.log('TAREFA: ' + tarefas[i].tarefa);
                console.log('REALIZADA: ' + (tarefas[i].realizada ? 'Sim' : 'Não'));
                console.log('---');
            }
        }
        console.log('Pressione Enter para continuar');
        entrada ();   
    }

    // ADICIONAR TAREFA - A terceira opção do menu (3) permite adicionar uma nova tarefa à lista. O programa pede ao usuário para digitar uma descrição da tarefa e adiciona um novo objeto de tarefa ao array.
    if (opcao == 3) {
        const idCad = tarefas.length + 1;
        const tarefa = entrada('Digite a tarefa a ser realizada: ');
        const objAdd = {
            id: idCad,
            tarefa: tarefa,
            realizada: false
        };
        tarefas.push(objAdd);
        console.log('Tarefa adicionada com sucesso');
        console.log('Pressione Enter para continuar');
        entrada ();
    }

    // EDITAR TAREFA - A quarta opção do menu (4) permite editar uma tarefa existente. O programa lista todas as tarefas pendentes e pede ao usuário para selecionar uma delas. Depois, atualiza o objeto de tarefa selecionado para indicar que ele foi concluído.
    if (opcao == 4) { //
        console.log('Tarefas a serem concluídas:');
        for (const i in tarefas){
            if (!tarefas[i].realizada){
                console.log(tarefas[i].id + '- ' + tarefas[i].tarefa);
            }
        }
        
        let tConcluir = parseInt(entrada('Digite o ID da tarefa que será concluída: ')) - 1;
    
        while (!tarefas[tConcluir]) {
            console.log('ID inválido. Por favor, insira um ID válido.');
            tConcluir = parseInt(entrada('Digite o ID da tarefa que será concluída: ')) - 1;
        }
    
        const objAtualizar = {
            id: tarefas[tConcluir].id,
            tarefa: tarefas[tConcluir].tarefa,
            realizada: true
        }
        tarefas[tConcluir] = objAtualizar;
    
        console.log(' ');
        console.log('Tarefa concluída com sucesso"');
        entrada('Pressione Enter para continuar');    
    }
    // Nessa implementação, a variável tConcluir é inicialmente definida com o ID inserido pelo usuário, mas é validada dentro de um loop while. O loop continuará sendo executado enquanto a condição !tarefas[tConcluir] for verdadeira, ou seja, enquanto o elemento correspondente ao ID inserido pelo usuário não existir no array de tarefas. Dentro do loop, é exibida uma mensagem de erro e o usuário é novamente solicitado a inserir um ID válido. Quando o ID inserido pelo usuário for válido, o loop será interrompido e o código continuará sua execução normalmente.
    

    // EXCLUIR TAREFA
    // EXCLUIR TAREFA
    if (opcao == 5) {
        console.log('---');
        console.log('Excluir tarefa:');
        console.log('---');
        for (const i in tarefas) { 
            console.log('ID: ' + tarefas[i].id);
            console.log('TAREFA: ' + tarefas[i].tarefa);
            console.log('---');
        }
        let idExcluir;
        do {
            idExcluir = parseInt(entrada('Digite o ID da tarefa a ser excluída: ')); 
        } while (isNaN(idExcluir) || idExcluir < 1);
        let indiceExcluir = -1;
        for (let i = 0; i < tarefas.length; i++) { 
            if (tarefas[i].id === idExcluir) {
                indiceExcluir = i;
                break;
            }
        }
        if (indiceExcluir === -1) {
            console.log('Tarefa não encontrada!'); 
        } else { 
            tarefas.splice(indiceExcluir, 1);
            console.log('Tarefa excluída com sucesso!');
        }
        console.log('Pressione Enter para continuar'); 
        entrada ();
    }
    //Nessa implementação, foi utilizado um loop do-while para solicitar ao usuário que digite o ID da tarefa a ser excluída, até que seja digitado um número inteiro positivo válido. A verificação é feita com a função isNaN() e com uma comparação para verificar se o valor digitado é maior ou igual a 1. Depois, o código segue com a busca e remoção da tarefa no array, como antes.    


// ENCERRAR PROGRAMA - O programa usa um loop "do-while" para exibir continuamente o menu até que o usuário escolha a opção de encerrar o programa (0). Depois que o loop termina, o programa exibe uma mensagem de encerramento.
} while (opcao != 0); 
console.log('Programa encerrado!');
entrada();