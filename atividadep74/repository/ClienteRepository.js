import ClienteTable from './../db/ClienteTable.js';

class ClienteRepository{
    
    async create(model){
        return await ClienteTable.create(model);
    }

    async read(){
        return await ClienteTable.findAll();
    }

    async update(model){
        return await ClienteTable.update(model,{where: {id:model.id}});
    }

    async delete(id){
        return await ClienteTable.destroy({where: {id:id}});
    }
}

export default ClienteRepository;