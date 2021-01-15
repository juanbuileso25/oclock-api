const { getUsers, createUser } = require('./dao');
const model = require('./model');
const bcrypt = require('bcrypt');

module.exports = {
    async getUsers(req, res){
        const users = await model.getUsers();
        res.send(users);
    },
    async createUser(req, res){
        let name = req.body.name;
        let email = req.body.email;
        let password = bcrypt.hashSync(req.body.password, 10);
        let role = req.body.role;

        const user = await model.createUser({name, email, password, role});

        res.send(user);
    }
}