class classeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
	    this.tipo = tipo
    }

    heroi(){
        console.log(`${this.nome} com idade de ${this.idade} é da classe ${this.tipo}`);
    }

}

let heroi = new classeHeroi("Gandalf", "89", "Mago");

heroi.heroi();

console.log("\nUm Mostro apareceu e Ele quer lutar.\n");

class poderesHerois{
    constructor(poder1, poder2, poder3){
        this.poder1 = poder1;
        this.poder2 = poder2;
        this.poder3 = poder3;
    }
    poderes(){
        console.log(`Escolha um dos seus ataque:
         1- Ataque Medio: ${this.poder1}    (Dano 57). 
         2- Ataque Pequeno: ${this.poder2}  (Dano 34). 
         3- Ataque Pesado: ${this.poder3}   (Dano 100).`);
    }
}

let poderes = new poderesHerois("Magia de Fogo", "Magia de raio", "Super Magia fogo revestido de raio");

poderes.poderes();

let vidaDoMostro = 100;


console.log("\nA vida do mostro é " + vidaDoMostro,"\n");

let ataques = [1, 2, 1, 3,];
let rodada = 0;

while(vidaDoMostro > 0 && rodada < ataques.length){
    let ataque = ataques[rodada];
    rodada++;

if(ataque === 1){
    console.log("Mostro sofreu um bom ataque, ele esta bem fraco agora.");
    vidaDoMostro -= 54;
}else if(ataque === 2){
    console.log("Mostro foi atacado porem sem muito danos.");
    vidaDoMostro -= 34;
}else if(ataque === 3){
    console.log(`${heroi.name} usou um super ataque é o mostro foi derrotado`);
    vidaDoMostro -= 100;
}else{
    console.log("Ataque inválido, tente novamente!");
}

if (vidaDoMostro > 0) {
    console.log(`\nVida restante do monstro: ${vidaDoMostro}\n`);
}

}

console.log("\nParabéns", heroi.nome,",você derroutou o monstro.\n");
