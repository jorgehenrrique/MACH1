export default function calcular(valor, dataAtraso) {
    const taxaDeMulta = 0.2; // Taxa de multa de 2%
    const multaPorDia = valor * taxaDeMulta / 30; // Valor da multa por dia de atraso
    const multa = multaPorDia * dataAtraso;
    return multa;
}
