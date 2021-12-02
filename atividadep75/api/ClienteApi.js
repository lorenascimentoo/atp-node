import { Router } from 'express';
import Cliente from './../model/Cliente.js';
import ClienteRepository from './../repository/ClienteRepository.js';

const ClienteApi = Router();
const cRepo = new ClienteRepository();

ClienteApi.get('/',async(req,resp) => {
    const lista = await cRepo.read();
    resp.send(lista);
});

ClienteApi.post('/',async(req,resp) => {
    let {nome,sobrenome} = req.body;
    const cliente = new Cliente(nome, sobrenome);
    const retorno = await cRepo.create(cliente);
    resp.send(retorno);
});

ClienteApi.put('/:id',async(req,resp) =>{
    let id = req.params.id;
    let {nome, sobrenome} = req.body;
    const cliente = new Cliente(nome,sobrenome,id);
    const retorno = await cRepo.update(cliente);
    resp.send(retorno);
});

ClienteApi.delete('/:id',async(req,resp) =>{
    let id = req.params.id;
    const retorno = await cRepo.delete(id);
    resp.send(JSON.stringify(retorno));
});

export default ClienteApi;