//JSON - JavaScript object Notation
//chave e valor com o objetivo de transferir dados
let invoice = {
    name: "Felipe", 
    age: 28,
    products: {
        0: ["mouse 2xwm", "29.90"],
        1: ["teclado mecanico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", "10000.90"]
    }
}

generateInvoice(invoice);

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`O idade é ${invoice.age}`);
    console.log("-----------");
    
    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index];
        console.log(`- ${productsName}: R$ ${productsPrice}`);
    }

}
   