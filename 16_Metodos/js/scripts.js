let pessoa = {
    nome: "João",
    idade: 21,
    profissao: "Estagiario",
    falar: function () {
        console.log("Olá, meu nome é " + this.nome);
    }, //criar metodo dentro do objeto
    soma: function(a, b) {
        return a + b;
    },
}

console.log(pessoa.nome)

pessoa.falar();

var soma = pessoa.soma(2, 8);

console.log(soma); 