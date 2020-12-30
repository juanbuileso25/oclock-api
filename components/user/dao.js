const connection = require('../../services/BDConnection/db');
const conn = connection();

module.exports = {
    getUsers(){
        return new Promise((resolve, reject) => {
            conn.promise().query('SELECT * FROM user')
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
    }
}