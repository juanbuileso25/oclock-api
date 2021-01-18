const connection = require('../../services/BDConnection/db');
const conn = connection();

module.exports = {
    getOneUser({id}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL getOneUser(?)', [id])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch( error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    },
    getUsers(){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL getAllUsers()')
                .then(([rows])=> {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch( error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    }, 
    createUser({name, email, password, role}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL createUser(?,?,?,?)', [name, email, password, role])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    })
                })
                .catch( error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    },
    updateUser({id, name, email, password, role, state}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL updateUser(?,?,?,?,?,?)', [id, name, email, password, role, state])
                .then(([rows]) => {
                    return resolve({
                        success: true, 
                        value: rows
                    });
                })
                .catch( error => {
                    return reject({
                        success: false, 
                        value: error
                    });
                });
        });
    },
    deleteUser({id}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL deleteUser(?)', [id])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch( error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    }
}