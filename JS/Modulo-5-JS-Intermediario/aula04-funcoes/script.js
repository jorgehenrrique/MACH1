// Crie um arquivo chamado funcoes1_js.html, e vamos fazer um algoritmo:

// a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

// b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

// c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

// d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

// Dicas importantes:
// ● Utilize CPFs gerados através de geradores de CPF na internet.
// 81945473185 // 56410526121 // 05485787029 // 13929630010

{   //a // b
    function validaQtd() { // Valida se o usuario digitou numeros e a quantidade 11
        let cpfQtd = 0;
        do {
            let cpf = prompt('Digite seu CPF, são 11 números: ');
            if (!isNaN(cpf)) {
                cpfQtd = cpf.length;
                return cpf;
            } else {
                alert('Digite números!');
            }
        } while (cpfQtd != 11);
        // return cpf;
    };

    // c
    function formataCpf(cpf) { // Formata CPF adicionando os caracteres exigidos
        let recebeCpf = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9)}`;
        return recebeCpf;
    };

    // d
    function exibiCpf() { // Exibe o CPF formatado para o usuário
        let cpfFormatado = formataCpf(validaQtd()); // Busca o cpf formatado da funcao: formataCpf, passando como argumento a funcao: validaQtd
        alert(`CPF formatado: ${cpfFormatado}`);
    }

    exibiCpf(); // Executa a funcao de exibir e dentro dela ela chamará as outras

    // Pergunta se deseja formatar novamente
    while (true){
        let sim = '';
        sim = prompt('Deseja formatar outro CPF? responda com, s ou n: ');
        if (sim.toLowerCase() == 's'){
            exibiCpf();
        } else {
            break;
        }
    }
}