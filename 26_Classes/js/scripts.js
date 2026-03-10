class Produto{
    constructor(name,price){
        this.name = name
        this.price = price
    }

    detalheProduto(){
        return console.log(`O nome do produto é ${this.name}, preço: ${this.price}`)
        //semmpre que eu estiver em uma classe e quiser referir
        //ao valor que esta dentro do construtor precisa ser passado como
        //this.(variavel)
    }
}

const teste = new Produto( 'Joao', 50)

console.log(teste)

teste.detalheProduto()

//superclasse
 class superProduto extends Produto{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }

    //as superclasses pode também conter suas proprias funções
    //mas também chamar as funções da classe pai
 }

 const tenis =  new superProduto(`Adidas`, 299.99, 42)

tenis.detalheProduto()

 