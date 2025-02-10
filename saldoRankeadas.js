
function daRank(){
    let continuar = true;

    while(continuar){
        let partidasJogadas = 50;
        let partidasperdidas = 20

        let vitoria = partidasJogadas - partidasperdidas;

        console.log("Voce jogou um total de " + partidasJogadas + " partidas é perdeu " + partidasperdidas + " partidas");
        
        console.log("\nVoce teve um total de " + vitoria + " de vitorias\n");

        if(vitoria < 10){
            let rank = "Ferro";
            console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }else if( vitoria >= 11 && vitoria <= 20){
            let rank = "Bronze";
            console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }else if( vitoria >= 21 && vitoria <= 50){
            let rank = "Prata";
            console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }else if( vitoria >= 51 && vitoria <= 80){
            let rank = "Ouro";
            console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }else if( vitoria >= 81 && vitoria <= 90){
        let rank = "Diamante";
        console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }else if( vitoria >= 91 && vitoria <= 100){
            let rank = "Lendário";
            console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }else{
            let rank = "Imortal";
            console.log(`O Herói tem de saldo de vitorias ${vitoria} é está no nível de ${rank}.`);
        }
        continuar = false;
    }
}

daRank();