const model = require('./model');

module.exports = {
    async getProviders(req, res){
        const providers = await model.getProviders();
        res.send(providers);
    }, 
    async createProvider(req, res){
        let name = req.body.name;
        let email = req.body.email;
        const provider = await model.createProdiver({name, email});
        res.send(provider);
    }
}