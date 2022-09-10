// Agrego express y el router
const express = require('express');
const router = express.Router();

// Traigo el controller
const mainController = require('../controllers/mainController')

// Acá defino las rutas
router.get('/', mainController.index);
router.get('/detalleMenu', mainController.detalleMenu);
router.get('/plato/:id', mainController.plato)

// Acá exporto el resultado
module.exports = router;