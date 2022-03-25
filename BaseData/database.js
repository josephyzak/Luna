const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'liofilizador',
    database: 'liofilizador_db',
    password: 'liofi1234'
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