
var nome = "Joao";

console.log(nome.length);
//Devolve o tamanho da string

//indexOf
var frase = "João é lindo";
console.log(frase.indexOf("é"));
//Devolve o valor do inicio da casa onde encontrou a string passada correspondente

//slice
var roeu = frase.slice(5, 13);

console.log(roeu);
//retira a palavra pelo valor do local do caracter passado

//reaplace
frase = frase.replace("é", "é tão");
console.log(frase);
//Consegue trocar a palavra que queira por outra na frase

//toLowerCase e upperLowerCase
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
//Deixa a string minuscula e maiusculas respectivamente

//trim
var teste = "    João         ";
console.log(teste.trim());
//tira os espaços do texto

//split
console.log(frase.split(" "))

