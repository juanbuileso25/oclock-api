const { updateProvider } = require('./dao');
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
    },
    async updateProvider(req, res) {
        let id = req.params.id;
        let name = req.body.name;
        let email = req.body.email;
        let state = req.params.state;

        const provider = await model.updateProvider({id, name, email, state});

        res.send(provider);
    }
}