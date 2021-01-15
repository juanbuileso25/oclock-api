const { getUsers, createUser } = require('./dao.js');
const dao = require('./dao.js');

module.exports = {
    async getUsers(){
        try {
            return await dao.getUsers();
        } catch (error) {
            return error;
        }
    }, 
    async createUser({name, email, password, role}){
        try {
            return await dao.createUser({name, email, password, role});
        } catch (error) {
            return error;
        }
    }
}