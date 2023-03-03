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

function listarUsuariosPadrao() { // lista usuarios da lista acima
listaUsuarios.forEach(listarUsuario);
}
listarUsuariosPadrao();

function listarUsuario(usuario) {

    resultado.innerHTML += `<tr>
        <td>${usuario.id}</td>
        <td>${usuario.nome}</td>
        <td>${usuario.sexo}</td>
        <td>${usuario.idade}</td>
        <td>${usuario.email}</td>
    </tr>`;
}

function consulta() {
    let listaFiltrada = listaUsuarios.filter((usuario) => {
        return usuario.id === Number(inputPesquisa.value)
    });
    console.log(listaFiltrada);
    resultado.innerHTML = '';
    listaFiltrada.forEach(listarUsuario);
    return listaFiltrada;
}

pesquisar.addEventListener('click', () => {
    consulta();
    if (inputPesquisa.value.length === 0) {
        resultado.innerHTML = `<tr><td colspan="5">Nenhum nome encontrado</td></tr>`;
    }
})
limpar.addEventListener('click', () => {
    inputPesquisa.value = '';
    resultado.innerHTML = '';
    // listaUsuarios.forEach(listarUsuario);
    listarUsuariosPadrao();
})