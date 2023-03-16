let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
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
];
//Este código cria um array chamado tarefas com 3 objetos que representam diferentes tarefas, cada uma com um id, uma tarefa e um valor booleano realizada que indica se a tarefa foi ou não realizada.

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Editar tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

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

    if (opcao == 4) {
        
    }

    if (opcao == 5) {
        
    }

} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();