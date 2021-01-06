const model = require('./model');

module.exports = {
    async getProviders(req, res){
        const providers = await model.getProviders();
        res.send(providers);
    }
}