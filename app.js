// Módulos
const mainRouter = require('./routes/mainRouter')
const express = require('express');
const app = express();
// Acá falta uno... 😇

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');
// Rutas
app.use('/', mainRouter);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})