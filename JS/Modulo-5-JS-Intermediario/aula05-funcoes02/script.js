{ // Exercício aula 12
    // a
    let listaCpf = [];
    for (i = 0; i < 5; i++) {
        listaCpf[i] = prompt(`Digite o ${i + 1}º CPF: `);
    }

    // b
    function verificaCPF(cpfs) { // Verifica quais cpfs são validos e armazena em outra lista se sao validos ou nao
        let listaCpfs = [];
        for (let cpf of cpfs) {
            if (!isNaN(cpf) && cpf.length == 11) {
                listaCpfs.push('valido!')
            } else {
                listaCpfs.push('invalido!')
            }
        }
        return listaCpfs;
    }

    // c
    function formataCPF(...cpfs) { // Formata os cpfs, e os atribuem numa lista
        let cpfFormatado = [];
        for (let cpf of cpfs) {
            cpfFormatado.push(`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`);
        }
        return cpfFormatado;
    }

    // d
    function exibeCPF() { // Exibe os cpfs formatados, informa se é válido e a quantidade
        let posicao = 0;
        let cpfsValidos = 0;
        for (let cpf of verificaCPF(listaCpf)) {
            if (cpf == 'valido!') {
                alert(`${posicao + 1}º CPF: ${formataCPF(...listaCpf)[posicao]}, ${cpf}`);
                cpfsValidos++;
            } else {
                alert(`${posicao + 1}º CPF: ${cpf}`);
            };
            posicao++;
        };
        alert(`CPFs válidos: ${cpfsValidos}`);
    }

    exibeCPF(); // Chama a funcao de exibir os cpf, que chama a funcao de verificacao, e tbm chama a funcao de formatacao
}