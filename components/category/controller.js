const { getAllCategory, getOneCategory } = require('./dao');
const model = require('./model');

module.exports = {
    async getAllCategory(req, res){
        const category = await model.getAllCategory();
        res.send(category);
    },
    async getOneCategory(req, res){
        let id = req.params.id;
        const category = await model.getOneCategory(id);
        res.send(category);
    }
}