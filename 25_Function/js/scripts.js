//Functions padrões

function minhaFuncao(){
    console.log("Minha Função")
}

minhaFuncao()

function nomeCompleto(nome, sobrenome){
    return console.log(`O nome completo é: ${nome} ${sobrenome}`)
}

let nome = "João"
let sobrenome = "Pedro"

nomeCompleto(nome, sobrenome)


//Arrow Functions
const myArrowFunction = (a,b) => {
    return a+b}


console.log(myArrowFunction(5,2))

const simpleFunction = (a,b) => a+b 

console.log(simpleFunction(3,4))