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

app.listen(3002, () => {
    console.log("Servidor está corriendo en: http;//localhost:3000");
});