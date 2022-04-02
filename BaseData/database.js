var mariadb = require("mariadb");

var pool = mariadb.createPool({
    host: '192.168.0.28',
    user: 'Luna',
    //port: 3306,
    database: 'Liofilizador',
    password: 'liofilizador',
});

//async function getConnection(){
//    try {
//        const connection = await pool.getConnection();
//        return connection;
//    } catch (error) {
//       console.log(error);
//    }
//}

//module.exports = {getConnection};
module.exports = Object.freeze({
    pool: pool
});