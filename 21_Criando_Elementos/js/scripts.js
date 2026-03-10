//inserir o valor no body
var novoParagrafo = document.createElement('p');

var text = document.createTextNode('Esse é o valor do paragrafo');

var body = document.querySelector('body');

body.appendChild(text)

// inserir um container

var container = document.getElementById('container');
console.log(container)

var el = document.createElement('span');

var elText = document.createTextNode('Esse é o valor do span');

el.appendChild(elText);

container.appendChild(el)