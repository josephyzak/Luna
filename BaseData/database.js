const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: '192.168.0.28',
    port: '3306',
    user: 'root',
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