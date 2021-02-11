const connection = require('../../services/BDConnection/db');
const conn = connection();

module.exports = {
    getAllCategory(){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL getAllCategory()')
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
                    })
                })
        })
    },
    getOneCategory({id}){
        return new Promise((resolve, reject) => {
            conn.promise().query('CALL getOneCategory()', [id])
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
                    })
                })
        })
    }
}