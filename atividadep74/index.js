import Cliente from "./model/Cliente.js";
import ClienteRepository from "./repository/ClienteRepository.js";

console.log('===== CLIENTES =====');

const cliente = new Cliente();
cliente.nome = "Natasha";
cliente.sobrenome = "Zapata";

const cRepo = new ClienteRepository();

//inserindo um dado na tabela
await cRepo.create(cliente);

const clienteUpdate = new Cliente();
clienteUpdate.id = 1;
clienteUpdate.nome = "William";
clienteUpdate.sobrenome="Patterson";

// atualizando um dado na tabela
await cRepo.update(clienteUpdate);

//deletando um dado da tabela
await cRepo.delete(3);
// listando os dados da tabela
const lista = await cRepo.read();
console.log(lista);