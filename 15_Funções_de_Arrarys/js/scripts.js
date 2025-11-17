var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr.push(6);//função para adicionar dados no final do array
arr.push("Qual quer coisa pode ser adicionada ao array");
console.log(arr);

arr.pop() // sempre remove o ultimo elemento do array
console.log(arr);

arr.unshift(0) // adiciona elemento no começo do array
console.log(arr);

arr.shift(0) //remove elemento no começo do array
console.log(arr);

console.log(Array.isArray(arr)); //valida se a variavel é realmente um array
