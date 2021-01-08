const connection = require('../../services/BDConnection/db');
const conn = connection();


module.exports = {
    getProviders(){
        return new Promise((resolve, reject) => {
            conn.promise().query('SELECT * FROM provider')
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
    createProdiver(){
        return new Promise((resolve, reject) => {
            conn.promise().query('INSERT INTO provider')
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    })
                })
        });
    }
}