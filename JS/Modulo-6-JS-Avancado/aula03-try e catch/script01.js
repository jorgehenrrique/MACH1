// Atividade pratica - Try, Catch 01

// Crie um código de tratamento de erro onde possua 3 níveis de tratamento de erro um dentro do outro. Nos níveis mais internos ao cair no catch, deve ser forçado outro erro para que ele caia no catch do pai.

try {
    try {
        try {
            variavelErro
        } catch (e) {
            console.log('Catch interno 03')
            throw e;
        }
    } catch (err) {
        console.log('Catch interno 02')
        throw err;
    }
} catch (error) {
    console.log('Catch externo 01')
    console.error(error.message)
}