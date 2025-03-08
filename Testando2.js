class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa);
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella");
let boloFesta2 = new formaDeBolo("morango", "pistache");

boloFesta.escrever();
boloFesta2.escrever();
boloFesta.assar();
boloFesta2.assar();