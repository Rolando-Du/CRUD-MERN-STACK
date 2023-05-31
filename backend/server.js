const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const archivoBD = require('./conexion');



//Importacion del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/usuario', rutausuario)

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenidos al servidor Backend Node.js!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor de NODE escuchando en el puerto http://localhost:${port}`);
});
