// Acá nos falta nuestra fuente de datos
const menu = require('../data/menu.json')

// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    index : (req, res ) => {
        return res.render('index', { menu });
    },

    detalleMenu: ( req, res) => {
        return res.render('detalleMenu', { menu })
    },

    plato: ( req, res) => {
        const id = Number(req.params.id);
        return res.render('plato', { menu , id })
    }
}

// Acá exportamos el resultado
module.exports = controller;