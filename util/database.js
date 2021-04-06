const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_application','root','P@$$w0rd',{
    dialect:'mysql',
    host:'localhost'
});
module.exports = sequelize;