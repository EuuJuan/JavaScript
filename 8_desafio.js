/*
2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMÇ
(IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peco ao José para dizer o valor do seu IMC;
*/
class Pessoa{
    nome;
    pesso;
    altura;

    constructor(nome, pesso, altura){
        this.nome = nome;
        this.pesso = pesso;
        this.altura = altura;
    }

    calculaIMC(){
        return this.pesso / Math.pow(this.altura, 2);
    }

    classificarImc(){
        const  imc = this.calculaIMC();
        if(imc < 18.5){
            return ('Voce esta abaixo do peso');
        }else if(imc >= 18.5 && imc  < 25){
            return ('Voce esta com o peso normal');
        }else if(imc >= 25 && imc < 30){
            return ('Voce esta acima do peso');
        }else if(imc >= 30 && imc < 40){
            return ('Voce esta obeso');
        }else{
            return ('Voce esta com obsesidade grave');
        }
    }
}

const jose = new Pessoa ('Jose', 70, 1.75);
console.log(jose.classificarImc());

const renan = new Pessoa ('Renan', 63, 1.75);
console.log(renan.classificarImc());

const vitor = new Pessoa ('Vitor', 60, 1.69);
console.log(vitor.classificarImc());