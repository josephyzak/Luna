const express = require("express");
const {vistahome, vistaconfiguracion, vistafrio, vistapresion, vistacalefaccion, vistalogin, vistaregistro, vistaauth, vistaregister} = require("../controllers/PageControllers.js");
const router = express.Router();

router.get("/", vistahome);
router.get("/configuracion", vistaconfiguracion);
router.get("/frio", vistafrio);
router.get("/presion", vistapresion);
router.get("/calefaccion", vistacalefaccion);

router.get("/login", vistalogin);
router.get("/registro", vistaregistro);

router.post("/auth", vistaauth);
router.post("/register", vistaregister);

module.exports = {router: router}