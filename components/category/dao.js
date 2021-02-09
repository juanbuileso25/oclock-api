const connection = require('../../services/BDConnection/db');
const conn = connection();

module.exports = {
    getAllCategory(){
        return new Promise((resolve, reject) => {
            conn.promise.query('')
                .then(([rows]) => {
                    return resolver({
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