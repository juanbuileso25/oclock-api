const { getUsers } = require('./dao.js');
const dao = require('./dao.js');

module.exports = {
    async getUsers(){
        try {
            return await dao.getUsers();
        } catch (error) {
            return error;
        }
    }
}