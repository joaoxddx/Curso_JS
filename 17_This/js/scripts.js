let pessoa = {
    nome: "João",
    idade: 21,
    profissao: "Estagiario",
    falar: function () {
        console.log("Olá, meu nome é " + this.nome);
    }, //this se refere ao objeto da instância que esta sendo usado no momento
    aniversario: function () {
        this.idade++;
    }
    //a gente consegue alterar o valor do objeto e também consegue acessar o valor do objeto
}

// console.log(this)//objeto global

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);