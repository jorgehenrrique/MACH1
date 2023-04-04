export default function calcular(valor, dataAtraso) {
    const taxaDeJuros = 0.1; // Taxa de juros de 1% ao mês
    const jurosPorDia = (valor * taxaDeJuros) / 30;
    const juros = jurosPorDia * dataAtraso;
    return juros;
}
