//Parsefloat -> transformar em valores ponto flutuante

console.log(parseFloat('14.22')); // transformar em number
console.log(parseInt('10')); // transformar em number
console.log(parseInt(16.87)); // transformar em number mas apresenta só a parte inteira do valor

console.log(parseFloat(3.1491224.toFixed(4))) //Determina quantas casas decimais irá mostrar.


console.log(isNaN('teste')); // Verifica se o valor é um texto e não numero
console.log(isNaN('16')); //essa função consegue tranformar valores string em number para confirmar

//MAX VALUE e MIN_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE); 