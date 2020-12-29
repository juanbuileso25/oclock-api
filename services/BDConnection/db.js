const mysql = require('mysql2');
const config = require('../../config/environments/default');

const connection = mysql.createConnection({
    host: config.DB.host,
    user: config.DB.username,
    database: config.DB.database
})

connection.connect((err) => {
    if(err){
        console.error(err);
    } else {    
        console.log('funciono la conexion!');
    }
});

module.exports = () => {
    return connection
};

