class Cliente{
    cpf;
    rg;
}

class Pessoa{
    nome;
    sobrenome;
}

let cliente = new Cliente();
cliente.cpf="11111111111";
cliente.rg="1234567";

let pessoa = new Pessoa();
pessoa.nome="Teste";
pessoa.sobrenome="JS";

console.log(cliente,pessoa);