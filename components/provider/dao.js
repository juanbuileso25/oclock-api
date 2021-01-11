const connection = require('../../services/BDConnection/db');
const conn = connection();


module.exports = {
    getProviders(){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL getAllProviders()')
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch(error => {
                    return reject({
                        success: false,
                        value: error
                    });
                })
        });
    },
    createProdiver({name, email}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL createProvider(?, ?)', [name, email])
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
    updateProvider({id, name, email, state}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL updateProvider(?,?,?,?)', [id, name, email, state])
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