/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
1 - A vista Debito, receba 10% de desconto;
2 - A vista no Dinheiro ou PIX, Receba 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const preco_Etiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(preco_Etiqueta, 10));
}else if (formaDePagamento === 2){
    console.log(aplicarDesconto(preco_Etiqueta, 15));
}else if (formaDePagamento === 3){
    console.log(preco_Etiqueta);
}else{
    console.log(aplicarJuros(preco_Etiqueta, 10));
}

/*
console.log(200 * 0.10);
console.log(10 / 100);
*/