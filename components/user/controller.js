const { getUsers, createUser, updateUser, deleteUser } = require('./dao');
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
    },
    async updateUser(req, res){
        let id = req.params.id;
        let name = req.body.name;
        let email = req.body.email;
        let password = bcrypt.hashSync(req.body.password, 10);
        let role = req.body.role;
        let state = req.body.state;

        const user = await model.updateUser({id, name, email, password, role, state});

        res.send(user);
    },
    async deleteUser(req, res){
        let id = req.params.id;

        const user = await model.deleteUser({id});

        res.send(user);
    }
}