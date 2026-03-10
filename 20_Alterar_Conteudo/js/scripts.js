//1º selecionar elemento
var title = document.querySelector('#title');

console.log(title);

//innerHTML

title.innerHTML = '<span>Título alterado com innerHTML</span>';

//textContent
var title2 = document.querySelector('#title2');

title2.textContent = 'Título alterado com textContent';