import { cadastroMatricula, cadastroNome, btnCadastrar, loaderCadastro } from "./modules/elementos.js";


const matricular = () => {
    let matricula = cadastroMatricula.value.trim();
    let nomeAluno = cadastroNome.value.trim();
    if (matricula == '' || nomeAluno == '') {
        alert('Preencha Matricula e Nome')
        throw new Error('Camos vazios');
    }
    loaderCadastro.style.display = 'block';

    const url = 'http://192.168.50.99:3000/aluno';

    const dataObjPost = {
        nome: nomeAluno,
        matricula: matricula
    };
    const initOptions = {
        method: "POST",
        body: JSON.stringify(dataObjPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    fetch(url, initOptions).then((response) => {
        if (response.ok && response.status === 200) {
            console.log('Aluno cadastrado com sucesso');
            loaderCadastro.style.display = 'none';
            alert('Aluno cadastrado com sucesso');
            return response.json();
        } else {
            loaderCadastro.style.display = 'none';
            alert('Matricula já cadastrada');
            throw new Error('Matricula já cadastrada');
        }
    }).catch((error) => {
        console.log('[Error:]', error);
    })
}
btnCadastrar.onclick = matricular;

