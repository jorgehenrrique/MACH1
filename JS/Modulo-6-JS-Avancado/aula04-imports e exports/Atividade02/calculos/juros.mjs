export default function calcular(valor, dataAtraso) {
    const taxaDeJuros = 0.1; // Taxa de juros de 1% ao mês
    const diasPorMes = 30; // Aproximadamente 30 dias em um mês
    const jurosPorDia = (valor * taxaDeJuros) / diasPorMes;
    const juros = jurosPorDia * dataAtraso;
    return juros;
}
