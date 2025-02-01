/*
Faça um progrema para calcular o valor de uma viagem.

Você teré 3 variáveis. Sendo elas:

- Preço do combustível;
- Gasto médio de combustivel do carro por km;
- Distância em KM da viagem;
*/
const PrecoCombustivel = 5.79; 
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * PrecoCombustivel;

console.log(valorGasto.toFixed(2));
