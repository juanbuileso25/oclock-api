const { getProviders } = require('./dao');
const dao = require('./dao');

module.exports = {
    async getProviders(){
        try {
            return await dao.getProviders();
        } catch (error) {
            return error;
        }
    }
}