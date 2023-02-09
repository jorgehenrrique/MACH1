// Calculadora de desconto mensal de IR
// Usuario digita seu salario
// Devolver o desconto de IR correspondente com base na tabela
/* * Requisitos:
● Você deverá utilizar Arrow Function e Callback na sua solução.
● Fique atento nas regras do IR para atender os cenários propostos.
● A organização do seu código e a nomenclatura das variáveis/funções será avaliada.
 */

let exibeDescontoIR = (retorno) => alert(`${retorno}`);


function recebeValida(exibeRetorno) {
    let salarioMensal = prompt('Informe seu salário mensal: ');
    let taxaIr = 0;
    let taxaDesconto = 0;
    let salarioDescontado = 0;
    let retorno = 0;

    if (salarioMensal > 1903 && salarioMensal <= 2826) {
        taxaIr = 0.075;
        taxaDesconto = salarioMensal * taxaIr;
        taxaDesconto -= 142;
        salarioDescontado = salarioMensal - taxaDesconto;

    } else if (salarioMensal > 2826 && salarioMensal <= 3751) {
        taxaIr = 0.15;
        taxaDesconto = salarioMensal * taxaIr;
        taxaDesconto -= 354;
        salarioDescontado = salarioMensal - taxaDesconto;

    } else if (salarioMensal > 3751 && salarioMensal <= 4664) {
        taxaIr = 0.225;
        taxaDesconto = salarioMensal * taxaIr;
        taxaDesconto -= 636;
        salarioDescontado = salarioMensal - taxaDesconto;

    } else {
        taxaIr = 0.275;
        taxaDesconto = salarioMensal * taxaIr;
        taxaDesconto -= 869;
        salarioDescontado = salarioMensal - taxaDesconto;

    }
    if (salarioMensal <= 1903) {
        retorno = (`Isento\nSalario: R$${salarioMensal}`);
    } else {
        retorno = (`Salario descontato: R$${salarioDescontado.toFixed(2)}\nDesconto: R$${taxaDesconto.toFixed(2)}`);
    }
    exibeRetorno(retorno);
}

recebeValida(exibeDescontoIR);
