function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Jose') + ' é Maior de idade');
    }else{
        console.log(escrevaMeuNome('Jose') + ' é Menor de idade');
    }
}

verificarIdade(18);
