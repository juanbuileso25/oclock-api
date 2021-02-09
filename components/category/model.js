const dao = require('./dao.js');

module.exports = {
    async getAllCategory(){
        try {
            return await dao.getAllCategory();
        } catch (error) {
            return error;
        }
    }
}