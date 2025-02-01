const nomeDoHeroi = "Jose";
let exDoHeroi = 0;
let nivel;

console.log("Seu nome de heroi é " + nomeDoHeroi);

for(let i = 0; i < 7; i++){
    console.log("\nVoce farmou 1.000 de ex");
    exDoHeroi += 1000;
}

if(exDoHeroi <= 1000){
    //console.log("Voce esta no Ferro")
    nivel = "Ferro";
}else if(exDoHeroi >= 1001 && exDoHeroi <= 2000){
    //console.log("Voce esta no Bronze")
    nivel = "Bronze";
}else if(exDoHeroi >= 2001 && exDoHeroi <= 5000){
    //console.log("Voce esta no Prata")
    nivel = "Prata";
}else if(exDoHeroi >= 5001 && exDoHeroi <= 7000){
    //console.log("Voce esta no Ouro")
    nivel = "Ouro";
}else if(exDoHeroi >= 7001 && exDoHeroi <= 8000){
    //console.log("Voce esta no Platina")
    nivel = "Platina";
}else if(exDoHeroi >= 8001 && exDoHeroi <= 9000){
    //console.log("Voce esta no Ascendente")
    nivel = "Ascendente";
}else if(exDoHeroi >= 9001 && exDoHeroi <= 10000){
    //console.log("Voce esta no Imortal")
    nivel = "Imortal";
}else{
    //console.log("Voce esta no Radiante")
    nivel = "Radiante";
}

console.log("\nO Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);
