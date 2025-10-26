var idade = 17;
var autorizacao = true;
if (idade >= 18) {
    console.log("Pode fazer a CNH");
}
else
    if (idade > 18 && autorizacao)
    {
        console.log("Pode fazer CNH pela autorizacao") 
    }
    else
    {
        console.log("Não pode fazer de forma alguma")
    }

var nome = "João";
if (nome == "João")
{
    console.log("Seu nome é igual a " + nome);
}