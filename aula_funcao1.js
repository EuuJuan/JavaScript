
function calcularImc(peso,altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'Voce esta abaixo do peso';
    }else if(imc >= 18.5 && imc  < 25){
        return 'Voce esta com o peso normal';
    }else if(imc >= 25 && imc < 30){
        return 'Voce esta acima do peso';
    }else if(imc >= 30 && imc < 40){
        return 'Voce esta obeso';
    }else{
        return 'Voce esta com obsesidade grave';
    }
}

//Main
(function (){
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
