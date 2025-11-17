var x = 10;
console.log(x)
x = 2;
console.log(x)
if (true) {
    let x = 8;
    console.log(x)
}
// o let permite alterar o valor da variavel localmente sem alterar
// no global
console.log(x)

const y = 3;
console.log(y)
//y = 5;

// e o const não permite altera o valor da variavel assim sem ter o
//medo de haver alteração do valor durante o codigo.
// mas caso queira, pode colocar essa mesmo variavel com o const
//dentro de outro bloco, que assim pode manipulala, pois assim não
//irá alterar o valor da variavel global
if (true) {
    const y = 8;
    console.log(y)
}
console.log(y)