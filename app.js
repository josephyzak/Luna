const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

const router = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("./public"));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(expressLayouts);
app.use(router.router);

app.listen(3000, () => {
    console.log("Servidor está corriendo en: http;//localhost:3000");
    var mariadb = require("mariadb");

    var pool = mariadb.createPool({
        host: '192.168.0.28',
        user: 'Luna',
        //port: 3306,
        database: 'Liofilizador',
        password: 'liofilizador',
    });
    const result = await db.pool.query('INSERT INTO usuarios(email, password) values (?,?)', [Usuario, password]);
    console.log(result);
    console.log('conectado');
});