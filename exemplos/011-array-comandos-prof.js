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

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Concluir tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

    if (opcao == 1) {
        console.log('---');
        console.log('Tarefas pendentes:');
        console.log('---');
        for (const i in tarefas) {
            if (tarefas[i].realizada == false) {
                console.log('ID: ' + tarefas[i].id);
                console.log('TAREFA: ' + tarefas[i].tarefa);
                console.log('REALIZADA: ' + (!tarefas[i].realizada ? 'Não' : 'Sim'));
                console.log('---');
            }
        }
        console.log('');
        entrada('Pressione enter para continuar:');
    }

    if (opcao == 2) {
        console.log('---');
        console.log('Tarefas realizadas:');
        console.log('---');
        for (const i in tarefas) {
            if (tarefas[i].realizada == true) {
                console.log('ID: ' + tarefas[i].id);
                console.log('TAREFA: ' + tarefas[i].tarefa);
                console.log('REALIZADA: ' + (tarefas[i].realizada ? 'Sim' : 'Não'));
                console.log('---');
            }
        } 
        console.log('');
        entrada('Pressione enter para continuar:');       
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
        console.log('');
        console.log('Tarefa adicionada com sucesso!');
        entrada('Pressione enter para continuar:');      
    }

    if (opcao == 4) {
        console.log('Tarefas a serem concluídas:');
        for (const i in tarefas) {
            if (!tarefas[i].realizada) {
                console.log(tarefas[i].id + '- ' + tarefas[i].tarefa);
            }            
        }
        const tConcluir = parseInt(entrada('Digite o ID da tarefa que será concluída: ')) - 1;
            if (tConcluir < 0 || tConcluir > tarefas.length);
            console.log('ID inválida');
            
        const objAtualizar = {
            id: tarefas[tConcluir].id, 
            tarefa: tarefas[tConcluir].tarefa, 
            realizada: true              
        }
        tarefas[tConcluir] = objAtualizar;

        console.log('');
        console.log('Tarefa concluída com sucesso!');
        entrada('Pressione enter para continuar:'); 
    }

    if (opcao == 5) {
        console.log('Tarefas a serem excluídas:');
        for (const i in tarefas) {
            if (tarefas[i].realizada) {
                console.log(tarefas[i].id + '- ' + tarefas[i].tarefa);
            }            
        }
        const t_excluir = entrada('Insira o ID da tarefa a ser excluída: ');
        let tempArray = tarefas;
        tarefas = tempArray.filter(item => item.id != t_excluir);

        // resetar o array
        tempArray = [];
        for (const i in tarefas) {
            tempArray.push({
                id: parseInt(i) + 1, 
                tarefa: tarefas[i].tarefa, 
                realizada: tarefas[i].realizada                   
            });
        }
        tarefas = tempArray;

        entrada('Item excluído com sucesso!');
    }

} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();