const { getProviders } = require('./dao');
const dao = require('./dao');

module.exports = {
    async getProviders(){
        try {
            return await dao.getProviders();
        } catch (error) {
            return error;
        }
    },
    async createProdiver({name, email}){
        try {
            return await dao.createProdiver({name, email})
        } catch (error) {
            return error
        }
    }
}