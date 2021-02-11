const { getOneCategory } = require('./dao.js');
const dao = require('./dao.js');

module.exports = {
    async getAllCategory(){
        try {
            return await dao.getAllCategory();
        } catch (error) {
            return error;
        }
    },
    async getOneCategory({id}){
        try {
            return await dao.getOneCategory({id});
        } catch (error) {
            return error;
        }
    }

}