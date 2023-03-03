const resultado = document.querySelector('#resultado');
const inputPesquisa = document.querySelector('#pesquisa');
const pesquisar = document.querySelector('#pesquisar');
const limpar = document.querySelector('#limpar');

const listaUsuarios = [
    {
        id: 1,
        nome: 'Thiago Pereira',
        sexo: 'Masculino',
        idade: 20,
        email: 'fulanodetal@termail.com'
    },
    {
        id: 2,
        nome: 'Thais Lins',
        sexo: 'Feminino',
        idade: 19,
        email: 'thaisdetal@gtemail.com'
    },
    {
        id: 3,
        nome: 'Mariana Ferreira',
        sexo: 'Feminino',
        idade: 25,
        email: 'marianaferreirs@tailme.com'
    },
    {
        id: 4,
        nome: 'Pedro Ivo Silva',
        sexo: 'Masculino',
        idade: 28,
        email: 'pedroivo@gtepmail.com'
    }
];

function listarUsuariosPadrao(lista) { // lista usuarios da lista acima
    lista.forEach(listarUsuario);
}
listarUsuariosPadrao(listaUsuarios); // passa a lista padrao como argumento

function listarUsuario(usuario) {
    resultado.innerHTML += `<tr>
        <td>${usuario.id}</td>
        <td>${usuario.nome}</td>
        <td>${usuario.sexo}</td>
        <td>${usuario.idade}</td>
        <td>${usuario.email}</td>
    </tr>`;
}

function consulta() { // funcao que aplica o filter
    let entrada = inputPesquisa.value.toLowerCase().trim(); // convertendo entrada para minusculo e removendo espacos

    let listaFiltrada = listaUsuarios.filter((usuario) => { // cria nova lista com valores aprovados na condicao

        return usuario.id === Number(entrada) ||
            usuario.nome.toLowerCase().includes(entrada) ||
            usuario.sexo.toLowerCase() === entrada ||
            usuario.email.toLowerCase().includes(entrada);
    });

    resultado.innerHTML = '';
    listarUsuariosPadrao(listaFiltrada); // passa a lista filtrada como argumento e imprime
    return listaFiltrada;
}

pesquisar.addEventListener('click', () => {
    consulta();
    // || inputPesquisa.value.length === 0
    if (consulta().length === 0) { // se a nova lista nao tem valores, exibe mensagem
        resultado.innerHTML = `<tr><td colspan="5">Nenhum dado encontrado</td></tr>`;
    }
});
limpar.addEventListener('click', () => {
    inputPesquisa.value = ''; // limpa input
    resultado.innerHTML = ''; // limpa tabela
    listarUsuariosPadrao(listaUsuarios); // chama funcao que exibe lista padrao apos limpar
});