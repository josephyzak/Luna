const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'liofilizador_db',
    password: '',
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