//const dotenv = require("dotenv");
//const bcryptjs = require("bcryptjs");
//dotenv.config({path: "./env/.env"});
//const connection = require("../database/db");

const db = require("../BaseData/database.js");
const hex = require("string-hex");
const AesEncryption = require('aes-encryption');

const aes = new AesEncryption();
aes.setSecretKey('11122233344455566677788822244455555555555555555231231321313aaaff');

const vistahome = (req, res)=>{   
    if(req.session.loggedin){
        res.render("./hasdboard/home.ejs")
    }else{
        res.redirect("/login");
    }
}
const vistaconfiguracion = (req, res)=>{
    res.render("./hasdboard/configuracion.ejs")
}
const vistafrio = (req, res)=>{
    res.render("./hasdboard/frio.ejs")
}
const vistapresion = (req, res)=>{
    res.render("./hasdboard/presion.ejs")
}
const vistacalefaccion = (req, res)=>{
    res.render("./hasdboard/calefaccion.ejs")
}
const vistalogin = (req, res)=>{
    if(req.session.loggedin){
        res.redirect("/")
    }else{
        res.render("./login.ejs", {title: "login", layout: "./blanco.ejs"})
    }
}
const vistaregistro = (req, res)=>{
    res.render("./registro.ejs", {title: "registro", layout: "./blanco.ejs"})
}
const vistaauth = async(req, res)=>{
    const Usuario = req.body.email;
    const Password = req.body.password;
    //let passwordHaash = await bcryptjs.hash(Password, 8);
    //var passwordHaash = aes.decrypt();
    if(Usuario && Password){
        const result = await db.pool.query('SELECT password FROM usuarios WHERE email = ?', [Usuario]);
        if (result.length == 0 || !(Password == aes.decrypt(result[0].password))) {
            res.render("./login.ejs", {title: "login", layout: "./blanco.ejs"});
        } else {
            req.session.loggedin = true;
            //req.session.name = results[0].name
            res.redirect("/");
        }
        //console.log(result[0].password);
        //console.log(aes.decrypt(result[0].password));
        //connection.query("SELECT * FROM users WHERE Usuario = ?", [Usuario], async(error, results)=>{
            //if(results.length == 0 || !(await bcryptjs.compare(Password, results[0].Password))){
            //res.render("./login.ejs", {title: "login", layout: "./blanco.ejs"});
            //} else {
            //    req.session.loggedin = true;
            //    req.session.name = results[0].name
            //    res.redirect("/");
            //}
        //})
    } else {
        res.render("./login.ejs", {title: "login", layout: "./blanco.ejs"});
    }
}
const vistaregister = async(req, res)=>{
    const Usuario = req.body.email;
    const Password = req.body.password1;
    const Password2 = req.body.password2;
    if (Password == Password2){
        //let passwordHaash = await bcryptjs.hash(Password, 8);
        //const conn = pool.getConnection();
        try {
            const result = await db.pool.query('INSERT INTO usuarios(email, password) values (?,?)', [Usuario, aes.encrypt(Password2)]);
            console.log(result);
            //console.log('conectado');
            //res.send(result);
            res.render("./login.ejs", {title: "login", layout: "./blanco.ejs"});
        } catch (error) {
            res.render("./registro.ejs", {title: "registro", layout: "./blanco.ejs"});
        }
        
        
        //connection.query("INSERT INTO users SET ?", {Usuario:Usuario, Password:passwordHaash},async(error, results)=>{
        //    if(error){
        //        console.log(error);
        //    } else {
        //        res.render("./login.ejs", {title: "login", layout: "./blanco.ejs"});
        //    }
        //})
    } else {
        res.render("./registro.ejs", {title: "registro", layout: "./blanco.ejs"});
    }
}
module.exports = {
    vistahome,
    vistaconfiguracion,
    vistafrio,
    vistapresion,
    vistacalefaccion,
    vistalogin,
    vistaregistro,
    vistaauth,
    vistaregister
}