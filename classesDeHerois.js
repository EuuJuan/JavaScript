class classeHeroi{
    constructor(nome, idade, tipo){
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
    let ataque = "";

    switch(this.tipo.toLowerCase()){
        case "mago":
            ataque = ("magia");
            break;
        case "guerreiro":
            ataque = ("espada");
            break;
        case "monge":
            ataque = ("soco");
            break;
        case "ninja":
            ataque = ("shuriken");
            break;
        default:
            console.log("Esse ataque não existe");
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}.`);

    }
}

   let heroi1 = new classeHeroi("Gandalf", 89, "Mago");
   let heroi2 = new classeHeroi("Josias", 33, "Guerreiro");
   let heroi3 = new classeHeroi("Mario", 52, "Monge");
   let heroi4 = new classeHeroi("Ian", 21, "Ninja");


    heroi1.atacar();
    heroi2.atacar();
    heroi3.atacar();
    heroi4.atacar();
