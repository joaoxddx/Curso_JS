const btn = document.querySelector("#btn2")
const para = document.querySelector("#p1")
const text = document.querySelectorAll(".texto")

btn.addEventListener("click", function() {
    para.style.backgroundColor = 'red'
    text[0].style.color = 'green'
    console.log("CLICOU CARALHO")
})