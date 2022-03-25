var mariadb = require("mariadb");

var pool = mariadb.createPool({
    host: 'localhost',
    user: 'liofilizador',
    port: 3306,
    database: 'liofilizador_db',
    password: 'liofi1234',
});

async function getConnection(){
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getConnection};
//module.exports = Object.freeze({
//    pool: pool
//});