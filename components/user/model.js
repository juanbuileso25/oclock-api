
const dao = require('./dao.js');

module.exports = {
    async getOneUser({id}){
        try {
            return await dao.getOneUser({id});
        } catch (error) {
            return error;
        }
    },
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
    },
    async updateUser({id, name, email, password, role, state}){
        try {
            return await dao.updateUser({id, name, email, password, role, state});
        } catch (error) {
            return error;
        }
    },
    async deleteUser({id}){
        try {
            return await dao.deleteUser({id});
        } catch (error) {
            return error;
        }
    }
}