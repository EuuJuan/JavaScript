/*
faça um programa para calcular o valor de uma viagem

Voce terá 5 variáveis. Sendo elas:

1- Preço do etanol;
2- Preço da gasolina;
3- O típo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por KM;
5- Distãncia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanoll = 4.06;
const precoGasolina = 6.15;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorFinal = litrosConsumidos * precoEtanoll;
    console.log(valorFinal.toFixed(2));
} else {
    const valorFinal = litrosConsumidos * precoGasolina;
    console.log(valorFinal.toFixed(2));
}
