/*
2) O IMC - Indice de Massa corporal é um criterio da Organização mundial de saude parseFloat
dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição:
- abaixo de 18.5 abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obeso;
- acima de 40 obsesidade grave;
*/

const peso = 80;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);
console.log(imc.toFixed(2));

if(imc < 18.5){
    console.log("Voce esta abaixo do peso");
}else if(imc >= 18.5 && imc  < 25){
    console.log("Voce esta com o peso normal");
}else if(imc >= 25 && imc < 30){
    console.log("Voce esta acima do peso");
}else if(imc >= 30 && imc < 40){
    console.log("Voce esta obeso");
}else{
    console.log("Voce esta com obsesidade grave");
}