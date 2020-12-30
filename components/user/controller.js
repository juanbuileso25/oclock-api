const { getUsers } = require('./dao');
const model = require('./model');

module.exports = {
    async getUsers(req, res){
        const users = await model.getUsers();
        res.send(users);
    }
}