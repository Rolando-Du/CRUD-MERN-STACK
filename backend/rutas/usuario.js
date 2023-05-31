const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Maneja la solicitud POST para agregar un usuario
router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });

    nuevoUsuario.save()
        .then(() => {
            res.send('Usuario agregado correctamente');
        })
        .catch((err) => {
            console.error(err); // Registro del error en la consola para propósitos de depuración
            res.status(500).send('Error al agregar usuario'); // Respuesta genérica de error
        });
});

// Maneja la solicitud GET para obtener usuarios
router.get('/obtenerusuarios', (req, res) => {
    Usuario.find({})
        .then((usuarios) => {
            res.send(usuarios);
        })
        .catch((err) => {
            console.error(err); // Registro del error en la consola para propósitos de depuración
            res.status(500).send('Error al obtener usuarios'); // Respuesta genérica de error
        });
});

// Obtener data de usuarios
router.post('/obtenerdatausuario', (req, res) => {
    Usuario.findOne({ idusuario: req.body.idusuario })
        .then((usuario) => {
            res.send(usuario);
        })
        .catch((err) => {
            console.error(err); // Registro del error en la consola para propósitos de depuración
            res.status(500).send('Error al obtener usuarios'); // Respuesta genérica de error
        });
});

// Actualiza usuario
router.post('/actualizausuario', (req, res) => {
    const { idusuario, nombre, email, telefono } = req.body;

    Usuario.findOneAndUpdate(
        { idusuario: idusuario },
        { nombre: nombre, email: email, telefono: telefono },
        { new: true }
    )
        .then(() => {
            res.send('Usuario actualizado correctamente');
        })
        .catch((err) => {
            console.error(err); // Registro del error en la consola para propósitos de depuración
            res.status(500).send('Error al actualizar usuario'); // Respuesta genérica de error
        });
});


// Borrar usuario
router.post('/borrarusuario', (req, res) => {
    const { idusuario } = req.body;

    Usuario.findOneAndDelete({ idusuario: idusuario })
        .then(() => {
            res.send('Usuario eliminado correctamente');

        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error al eliminar usuario');
        });
});

module.exports = router;
