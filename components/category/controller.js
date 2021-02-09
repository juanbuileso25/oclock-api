const { getAllCategory } = require('./dao');
const model = require('./model');

module.exports = {
    async getAllCategory(req, res){
        const category = await model.getAllCategory();
        res.send(category);
    }
}