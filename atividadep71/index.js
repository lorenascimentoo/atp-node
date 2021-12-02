import {Categoria} from './Categoria.js';
import {Produto} from './Produto.js';

const categoria = new Categoria();
categoria.id=1;
categoria.nome="eletrodomestico";
categoria.descricao="casa";

const produto = new Produto();
produto.id = 1;
produto.nome = "celular";
produto.descricao = "smartphone";
produto.preco=899.90;

console.log(categoria);
console.log(produto);