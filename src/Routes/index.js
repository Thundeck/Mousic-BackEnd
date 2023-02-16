const { Router } = require('express');
const router = Router();


// Importar todos los routers;
const Track = require("./Track");
const Album = require("./Album");
const Genre = require("./Genre");
const Preview = require("./Preview");
const User = require("./User");


// Configurar los routers
router.use("/track", Track);
router.use("/album", Album);
router.use("/genre", Genre);
router.use("/preview", Preview);
router.use("/user", User);




module.exports = router;