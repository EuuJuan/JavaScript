/*let numero = '1'
console.log(numero === 1)
//guardar o valor em uma variavel de resultado true ou false
let marca = "Apple"
let resultado = marca === "Samsung"
console.log(resultado)

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?
*/

/*
let cpfBloqueado = "123.657.342-54"
let cpfUsuario = "234.056.068-87" 
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado? " + ehCPFBloqueado)
*/

let CPFPermitido = '403.565.653-65'
let CPFDoUsuario= '403.565.653-65'
//let CPFDoUsuario= '403.565.653-64'

let usuarioInvalido = CPFDoUsuario !== CPFPermitido

console.log("É um usuario invalido? " + usuarioInvalido)

