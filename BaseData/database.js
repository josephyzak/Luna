var mariadb = require("mariadb");

var pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'app_user',
    port: 3306,
    database: 'todo',
    password: 'Password123!',
});

//async function getConnection(){
//    try {
//        const connection = await pool.getConnection();
//        return connection;
//    } catch (error) {
//        console.log(error);
//    }
//}

//module.exports = {getConnection};
module.exports = Object.freeze({
    pool: pool
});