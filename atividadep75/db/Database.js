import Sequelize from 'sequelize';

const Database = new Sequelize(
    'postgres', // database
    'postgres', // user
    'aula2021', // password
    {
        host: 'localhost', //end server
        port: 5432, //porta
        dialect: 'postgres'
    }
);

export default Database;