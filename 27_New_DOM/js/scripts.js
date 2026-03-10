// const lista = document.querySelectorAll('.item')
const lista = document.querySelectorAll('.texto')

console.log(lista)

lista.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

const lista2 = document.querySelectorAll('.item')

lista2.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

const para = document.querySelector('#p1')

console.log(para.textContent)

para[0].style.backgroundColor = 'red'

